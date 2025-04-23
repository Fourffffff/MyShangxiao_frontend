<template>
	<view class="pagebg sd">
		<view class="searchbar">
			<view class="cate" @click="openCategoryPopup">
				分类
			</view>
			
			<SearchBar ></SearchBar>
		</view>
		<uni-popup ref="categoryPopup" type="bottom" background-color="#fff">
		     <view class="popup-content">
		       <view class="popup-header">
		         <text>选择分类</text>
		         <uni-icons type="closeempty" size="24" @click="closeCategoryPopup"></uni-icons>
		       </view>
		       <view class="category-list">
		         <view 
		           v-for="(item, index) in categories" 
		           :key="index" 
		           class="category-item"
		           @click="selectCategory(item)"
				   :style="{ 'transition-delay': `${index * 0.05}s` }"
		         >
		           {{ item.name }}
		         </view>
		       </view>
		     </view>
		   </uni-popup>
		<view class="SchoolTitleBar">
			<img src="/common/images/leaf_left.png" alt="" />
			<text>{{currentType}}</text>
			<img src="/common/images/leaf_right.png"></img>
		</view>
		 
		<view class="objCards">
			<view class="objCard" v-for="judge in judges" >
				<JudgeObj
					:rank="judge.rank"
					:name="judge.name"
					:description="judge.description"
					:score="judge.score"
					@click="goto_school_judge_info(judge.id)"
				/>
				<!-- <JudgeObj></JudgeObj> -->
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import uniPopup from '@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue';
import uniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue';
import { request } from '../../utils/request';
import { onLoad,onShow } from '@dcloudio/uni-app'

const categories = ref([
  { id: 1, name: "教学楼" },
  { id: 2, name: "图书馆" },
  { id: 3, name: "食堂" },
  { id: 4, name: "宿舍" },
]);

// 控制弹窗
const categoryPopup = ref(null);
const currentType=ref();

const judges=ref([])


const get_all=async()=>{
	let res=await request({
		url:'/judge/get_all',
		data:{
			type:currentType.value
		}
	})
	console.log(res);
	judges.value=res.data
}
const openCategoryPopup = () => {
  categoryPopup.value.open(); // 打开弹窗
};

const closeCategoryPopup = () => {
  categoryPopup.value.close(); // 关闭弹窗
};

const selectCategory = (item) => {
  console.log("选择了:", item.name);
  closeCategoryPopup();
  // 这里可以添加分类选择后的逻辑
  currentType.value=item.name;
  get_all(currentType.value)
};

function goto_school_judge_info(judgeId){
	uni.navigateTo({
		url:`/pages/school_judge_info/school_judge_info?judgeId=${judgeId}`
	})
}

onMounted(()=>{
	
})
onShow(() => {
	currentType.value=uni.getStorageSync('type')|| '教学楼'
	get_all()
})
onLoad((options)=>{
	
})
</script>

<style lang="scss" scoped>
.sd{
	padding:16rpx;
}
.searchbar{
	display: flex;
	justify-content: center;
	margin:0 16rpx;
	width: 100%;
	padding: 0 30rpx;
	.cate{
		text-align: center;
		display: flex;
		align-items: center;
		margin: 20rpx;
		background: $colorr;
		color: white;
		width: 120rpx;
		border-radius: 20rpx;
		justify-content: center;
	}
}
.SchoolTitleBar{
	background: linear-gradient(to bottom, rgba(204,247,131,0.64), white);
	width: 100%;
	height: 170rpx;
	border-radius: 30rpx;
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;
	gap: 20rpx;
	align-items: center;
	border:1px solid #BBBBBB;
	
	text{
		font-size: 50rpx;
		color:$colorr;
	}
}
.types{
	display: flex;
	flex-wrap: nowrap;
}


.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20rpx;
  border-bottom: 1rpx solid #eee;
  font-size: 32rpx;
  font-weight: bold;
}

// 确保弹出层不会被 TabBar 遮挡
:deep(.uni-popup__wrapper) {
  bottom: var(--window-bottom, 0) !important; // 适配安全区域
  max-height: 70vh; // 限制最大高度
  overflow-y: auto; // 允许滚动
}

.popup-content {
  padding: 30rpx;
  border-radius: 20rpx 20rpx 0 0;
  padding-bottom: calc(30rpx + env(safe-area-inset-bottom)); // 底部安全区域
}

.category-list {
  margin-top: 30rpx;
  max-height: 60vh; // 限制列表高度
  overflow-y: auto; // 允许滚动
}

.category-item {
  padding: 20rpx;
  margin-bottom: 20rpx;
  background: #f5f5f5;
  border-radius: 10rpx;
  text-align: center;
}
</style>
