<template>
  <view class="home">
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
			<view class="type" v-for="i in 8">
				<img src="/common/images/test.jpg" alt="" />
				<view>教学楼</view>
			</view>
		</view>
	</view>
	<view class="waterfall">
	  <NoteCard imageUrl="/common/images/test.jpg"/>
	  <NoteCard imageUrl="/common/images/index.png"/>
	  <NoteCard imageUrl="/common/images/test.jpg"/>
	  <NoteCard imageUrl="/common/images/test.jpg"/>
	</view>

  </view>
</template>

<script>

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
	
	  NoteCard {
	    break-inside: avoid; // 防止卡片被打断
	    
	    width: 10%;
	  }
	}

	
}

</style>
