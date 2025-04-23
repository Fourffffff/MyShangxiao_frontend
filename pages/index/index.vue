<template>
  <view class="home pagebg">
    <swiper
      class="banner"
      indicator-dots
      indicator-color="rgba(255,255,255,0.5)"
      indicator-active-color="#fff"
      autoplay
	  circular=""
    >
      <swiper-item v-for="(item, index) in 4" :key="index">
        <view class="img-wrapper">
            <image src="/common/images/test.jpg" mode="aspectFit" />
        </view>
      </swiper-item>
    </swiper>
	<view class="category">
		<view class="text">
			<view class="title" >分类</view>
			<view class="more">
				更多>
			</view>
		</view>
		
		<view class="card">
			<view class="type" v-for="type1 in types">
				<img :src="type1.image" alt="" @click="toDis(type1.typename)"/>
				<view @click="toDis(type1.typename)">{{type1.typename}}</view>
			</view>
		</view>
	</view>
	<view class="waterfall">
	  <NoteCard v-for="note in notes"
	        :imageUrl="note.images[0]"
	        :title="note.title"
	        :content="note.content"
	        :author="note.username"
	        :avatarUrl="note.avatarUrl"
	        :like="note.isliked"
	        :likes="note.likes"
			@click="to_note_info(note.id)"
	      />
	</view>

  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad,onShow } from '@dcloudio/uni-app'
import { request } from '../../utils/request';


let id=uni.getStorageSync("id");
const notes=ref([])
if(id=='')
	id=1
const types=ref([])

function to_note_info(id){
	uni.navigateTo({
		url:`/pages/note_info/note_info?id=${id}`
	})
}
const getNotes = async()=>{
	let res = await request({
		url:'/note/get_all',
		data:{
			id:id
		}
	})
	
	if(res.code==200){
		notes.value=res.data
	}
}

const getJudges = async()=>{
	let res = await request({
		url:"/judge/get_types"
	})
	types.value=res.data
	
}
function toDis(type){
	uni.setStorageSync('type',type)
	uni.switchTab({
		url:`/pages/school_discussion/school_discussion?type=${type}`
	})
}


onLoad((options)=>{
	if(id=='')
		id=1
	getNotes()
	getJudges()
})
onShow(()=>{
	getNotes()
})

</script>

<style lang="scss" scoped>
.home{
	.banner {
	  padding: 30rpx 0;
	  width: 750rpx;
	  height: 400rpx;
	  border-radius: 30rpx;
	  swiper {
	    width: 100%;
	    height: 100%;
	  }
	  
	  swiper-item {
	  	
	    width: 100%;
	    height: 100%;
	  }
	  .img-wrapper {
	    width: 100%;
	    height: 100%;
	    border-radius: 30rpx;
	    overflow: hidden; 
	  }
	  image {
	    width: 100%;
	    height: 100%;
	    border-radius: 30rpx;
	  }
	}
	
	
	.category{
		display: flex;
		flex-direction: column;
		.text{
			padding: 0 20rpx;
			display: flex;
			flex-direction: row-;
			justify-content: space-between;
			align-items: center;
		}
		.title{
			font-size: 40rpx;
		}
		.more{
			color: #BBBBBB;
		}
		.card{
			background-color: #efefef;
			display: grid;
			grid-template-columns: repeat(4,1fr); /* 自适应列 */
			gap: 10px; /* 网格间距 */
			justify-content: center;
			padding: 10rpx 30rpx;
			margin: 10rpx 10rpx;
			border-radius: 15rpx;
			justify-items: center; /* 网格项内容水平居中 */
			width: calc(100% - 20rpx); /* 减去左右 margin */
			box-sizing: border-box; /* 包含 padding 在宽度内 */
			.type{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: fit-content;
				img{
					border-radius: 50%;
					object-fit: cover;
					width: 100rpx;
					height: 100rpx;
				}
				view{
					font-size:20rpx;
				}
			}
		}
		
	}
	.waterfall {
	  column-count: 2;
	  column-gap: 20rpx;
		margin-bottom: 48rpx;
	  NoteCard {
	    break-inside: avoid; // 防止卡片被打断
	    
	    width: 10%;
	  }
	}

	
}

</style>
