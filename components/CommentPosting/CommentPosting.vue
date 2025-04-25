<template>
	<view class="commentPosting">
		<view class="left">
			<input
				v-model="commentText"
				placeholder="点击输入评论"
				class="comment-input"
			/>
		</view>
		<view class="right">
			<view class="btn" @click="post">
				发表
			</view>
		</view>
	</view>
	
</template>

<script setup>
import { ref } from 'vue';
import { request } from '../../utils/request';
const commentText=ref("")
const props = defineProps({
  kind: { type:String , default:'note'},
  obj_id:{type:Number,default:0},
  user_id:{type:Number,default:0}
})
const post=async()=>{
	if(props.kind=='note'){
		let res =await request({
			url:'/note/comment_post',
			method:'post',
			data:{
				id_note:props.obj_id,
				id_user:props.user_id,
				content:commentText.value
			}
		})
	}
		
	else if(props.kind=='judge'){
		let res=await request({
			url:'/judge/comment_post',
			method:'post',
			data:{
				id_judge:props.obj_id,
				id_user:props.user_id,
				content:commentText.value
			}
		})
	}
		
}
</script>

<style lang="scss" scoped>
.commentPosting{
	padding:0 16rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	bottom: 0;
		left: 0;
		width: 100%;
		z-index: 999;
		background-color: #fff; // 防止透明
	.left{
		flex:6;
		margin: 16rpx;
		padding:16rpx 24rpx;
		background-color: #efefef;
		border-radius:50rpx;
		
	}
	.right{
		display: flex;
		flex:4;
		justify-content: center;
	}
	.btn{
		border: 1px solid $colorr;
		border-radius: 50rpx;
		background-color: $colorr;
		padding:8rpx 48rpx;
		color: #efefef;
		text-align: center;
	}
}
</style>