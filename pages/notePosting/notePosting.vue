<template>
	<scroll-view class="page" scroll-y>
		<view class="post-wrapper">
			<!-- 图片上传区域 -->
			<view class="image-area">
				<view class="image-box" v-for="(img, index) in images" :key="index">
					<image :src="img" class="preview-img" />
				</view>
				<view class="image-box add-box" @click="chooseImage">
					<text class="plus">+</text>
				</view>
			</view>

			<!-- 标题输入框 -->
			<input class="input-title" v-model="title" placeholder="添加标题" />

			<!-- 正文输入框 -->
			<textarea class="textarea-content" v-model="content" placeholder="添加正文..." />

			<!-- 发布按钮 -->
			<button class="submit-btn" @click="submit">发布动态</button>
		</view>
	</scroll-view>
</template>
<script setup>
import { ref } from 'vue'

const images = ref([])
const title = ref('')
const content = ref('')

function chooseImage() {
	uni.chooseImage({
		count: 1,
		success: (res) => {
			images.value.push(...res.tempFilePaths)
		}
	})
}

function submit() {
	console.log('标题：', title.value)
	console.log('正文：', content.value)
	console.log('图片：', images.value)
}
</script>


<style lang="scss" scoped>
.page {
	height: 100vh;
	overflow: hidden;
}

.post-wrapper {
	padding: 24rpx;
	width: 100%;
	box-sizing: border-box;
}

.image-area {
	display: flex;
	gap: 16rpx;
	margin-bottom: 24rpx;
	.image-box {
		width: 160rpx;
		height: 160rpx;
		background-color: #f3f3f3;
		border-radius: 12rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	.preview-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.add-box {
		border: 2rpx dashed #ccc;
		.plus {
			font-size: 60rpx;
			color: #aaa;
		}
	}
}

.input-title {
	width: 100%;
	border: none;
	background-color: #f3f3f3;
	border-radius: 8rpx;
	padding: 16rpx;
	margin-bottom: 16rpx;
	font-size: 28rpx;
	box-sizing: border-box;
	height: 100rpx;
}

.textarea-content {
	width: 100%;
	height: 240rpx;
	border-radius: 8rpx;
	background-color: #f3f3f3;
	padding: 16rpx;
	font-size: 28rpx;
	box-sizing: border-box;
}

.submit-btn {
	width: 100%;
	background-color: #91bf6f;
	color: white;
	border-radius: 8rpx;
	margin-top: 24rpx;
}
</style>
