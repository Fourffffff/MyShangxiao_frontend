<template>
  <view class="container">
    <view class="user-info-card">
      <view class="avatar-wrapper">
        <view class="avatar-placeholder">
          <uni-icons type="person-filled" size="60rpx" color="#fff"></uni-icons>
        </view>
      </view>
      <view class="info-wrapper">
        <text class="nickname">用户名</text>
      
      </view>
    </view>

    <view class="function-list">
      <view class="list-item">
        <view class="icon-wrapper">
          <uni-icons type="star-filled" size="44rpx"></uni-icons>
        </view>
        <text class="label">收藏</text>
        <uni-icons type="arrowright" size="40rpx" color="#888"></uni-icons>
      </view>
      <view class="list-item">
        <view class="icon-wrapper">
          <uni-icons type="chatboxes-filled" size="44rpx"></uni-icons>
        </view>
        <text class="label">我的动态</text>
        <uni-icons type="arrowright" size="40rpx" color="#888"></uni-icons>
      </view>
      <view class="list-item">
        <view class="icon-wrapper">
          <uni-icons type="locked-filled" size="44rpx"></uni-icons>
        </view>
        <text class="label">修改密码</text>
        <uni-icons type="arrowright" size="40rpx" color="#888"></uni-icons>
      </view>
      <view class="list-item">
        <view class="icon-wrapper">
          <uni-icons type="settings-filled" size="44rpx"></uni-icons>
        </view>
        <text class="label">设置</text>
        <uni-icons type="arrowright" size="40rpx" color="#888"></uni-icons>
      </view>
    </view>

    <button class="logout-button" @click="out">退出</button>

  </view>
</template>

<script setup>
import { ref } from 'vue';
function out(){
	uni.reLaunch({
		url:'/pages/login/login'
	})
}



</script>

<style lang="scss" scoped>
.container {
  background-color: #f8f8f8;
  min-height: 100vh;
}

.user-info-card {
  background-color: $colorr; /* 浅绿色背景 */
  padding: 40rpx;
  display: flex;
  align-items: center;
  margin: 30rpx;
  border-radius: 20rpx;
}

.avatar-wrapper {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 30rpx;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-wrapper {
  flex-grow: 1;
}

.nickname {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 10rpx;
}

.id {
  font-size: 28rpx;
  color: #666;
}

.function-list {
  background-color: #fff;
  border-radius: 10rpx;
  margin: 0 30rpx 30rpx;
  overflow: hidden;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 30rpx;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
}

.icon-wrapper {
  margin-right: 30rpx;
}

.label {
  flex-grow: 1;
  font-size: 32rpx;
  color: #333;
}

.logout-button {
  background-color: #d9534f; /* 红色背景 */
  color: #fff;
  border-radius: 10rpx;
  margin: 0 30rpx 40rpx;
  padding: 24rpx 0;
  font-size: 32rpx;
}


</style>