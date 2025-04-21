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
import { request } from '../../utils/request'
const images = ref([])
const title = ref('')
const content = ref('')
const id=uni.getStorageSync("id")
function chooseImage() {
	uni.chooseImage({
		count: 9,
		success: (res) => {
			images.value.push(...res.tempFilePaths)
		}
	})
}

const submit = async () => {
	if (!title.value || !content.value) {
		uni.showToast({ title: '标题或内容不能为空', icon: 'none' })
		return
	}

	let uploadedImageUrls = []

	// 一张张上传图片
	for (const path of images.value) {
		try {
			const uploadRes = await new Promise((resolve, reject) => {
				uni.uploadFile({
					url: 'http://localhost:8000/note/upload_img',
					filePath: path,
					name: 'file',
					success: resolve,
					fail: reject
				})
			})

			const result = JSON.parse(uploadRes.data)
			
			if (result.code === 200) {
				uploadedImageUrls.push(result.data)
			} else {
				uni.showToast({ title: '图片上传失败', icon: 'none' })
				return
			}
		} catch (err) {
			console.error('上传失败', err)
			uni.showToast({ title: '网络错误', icon: 'none' })
			return
		}
	}
	
	// 图片全部上传完成后，再发文章数据
	let res = await request({
		url: '/note/note_post',
		method: 'POST',
		data: {
			title: title.value,
			content: content.value,
			id: id,
			images: uploadedImageUrls // 上传后的服务器图片URL
		}
	})

	if (res.code === 200) {
		uni.showToast({ title: '发布成功', icon: 'success' })
		// 清空表单
		title.value = ''
		content.value = ''
		images.value = []
		uni.switchTab({
			url:'/pages/notes/notes'
		})
	} else {
		uni.showToast({ title: '发布失败', icon: 'none' })
	}
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
