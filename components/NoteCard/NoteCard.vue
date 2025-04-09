<template>
  <view class="card">
    <!-- 图片部分 -->
    <image class="card-image" :src="imageUrl" mode="widthFix" @error="handleImgError" />

    <!-- 内容标题 -->
    <view class="card-title">{{ title }}</view>

    <!-- 简要描述 -->
    <view class="card-desc">{{ desc }}</view>

    <!-- 底部 作者 + 点赞 -->
    <view class="card-footer">
      <view class="author">
        <image class="avatar" :src="avatarUrl" mode="aspectFill" />
        <text>{{ author }}</text>
      </view>
      <view class="likes">
        <uni-icons type="hand-up-filled" v-if="like" color="#91bf6f"></uni-icons>
        <uni-icons type="hand-up" v-if="!like" color="#91bf6f"></uni-icons>
        <text>{{ likes }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  imageUrl: { type: String, default: '/static/images/test.jpg' },
  title: { type: String, default: '标题标题' },
  desc: { type: String, default: '内容内容内容内容内容内容内容内容...' },
  author: { type: String, default: '作者' },
  avatarUrl: { type: String, default: '/static/images/avatar.png' },
  like: { type: Boolean, default: false },
  likes:{type:Number,default:10}
})

function handleImgError(e) {
  console.log('图片加载失败:', e)
}
</script>

<style scoped lang="scss">
.card {
	margin: 20rpx;
  background-color: #fff;
  border-radius: 20rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.05);
  
  .card-image {
    width: 100%;
    max-height: 300rpx;
    background-color: #eee;
    display: block;
  }

  .card-title {
    font-weight: bold;
    font-size: 28rpx;
    padding: 16rpx 20rpx 0;
  }

  .card-desc {
    font-size: 24rpx;
    color: #666;
    padding: 6rpx 20rpx;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10rpx 20rpx 20rpx;
    font-size: 24rpx;
    color: #999;

    .author {
      display: flex;
      align-items: center;

      .avatar {
        width: 36rpx;
        height: 36rpx;
        border-radius: 50%;
        background-color: #ccc;
        margin-right: 10rpx;
      }
    }

    .likes {
      display: flex;
      align-items: center;
      gap: 6rpx;
    }
  }
}
</style>
