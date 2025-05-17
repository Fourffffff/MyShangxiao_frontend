<template>
  <view class="container">
    <view class="user-info-card">
      <view class="avatar-wrapper">
        <view class="avatar-placeholder">
          <image size="60rpx" color="#fff" :src="imageUrl" mode="aspectFit" @click="uploadAvatar"></image>
        </view>
      </view>
      <view class="info-wrapper">
        <text class="nickname">{{username}}</text>
      </view>
    </view>

    <view class="function-list">
      <view class="list-item" @click="goto_collection">
        <view class="icon-wrapper">
          <uni-icons type="star-filled" size="44rpx"></uni-icons>
        </view>
        <text class="label">收藏</text>
        <uni-icons type="arrowright" size="40rpx" color="#888"></uni-icons>
      </view>
      <view class="list-item" @click="goto_mynotes">
        <view class="icon-wrapper">
          <uni-icons type="chatboxes-filled" size="44rpx"></uni-icons>
        </view>
        <text class="label">我的动态</text>
        <uni-icons type="arrowright" size="40rpx" color="#888"></uni-icons>
      </view>
      <view class="list-item" @click="goto_passwordchange">
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
import { ref,onMounted } from 'vue';
import { request } from '../../utils/request';

const username=ref("")
const imageUrl=ref("")
let id=uni.getStorageSync("id")
const images=ref([])

function out(){
	uni.reLaunch({
		url:'/pages/login/login'
	})
}

const getAvatar = async () => {
	let res = await request({
		url: '/user/get_avatar',
		method: 'GET',
	})
	imageUrl.value = res.data || '/common/images/mine.png'
}


const getUsername=async()=>{
	let res=await request({
		url:'/user/get_username',
	})
	username.value=res.data
}

const uploadAvatar = async () => {
  // 先让用户选图片
  uni.chooseImage({
    count: 1,
    success: async (res) => {
      const tempFilePath = res.tempFilePaths[0]; // 选的图片路径

      // 再去上传选中的图片
      const uploadRes = await new Promise((resolve, reject) => {
        uni.uploadFile({
          url: 'http://localhost:8000/note/upload_img',
          filePath: tempFilePath,
          name: 'file',
          success: resolve,
          fail: reject
        });
      });

      const result = JSON.parse(uploadRes.data); // 解析后端返回
      if (result.code === 200) {
        imageUrl.value = result.data; // 更新页面上的头像地址

        // 然后告诉服务器更新用户头像
        await request({
          url: "/user/avatar_update",
		  method:'post',
          data: {
            avatarUrl: imageUrl.value
          }
        });
      } else {
        uni.showToast({
          title: '上传失败',
          icon: 'none'
        });
      }
    },
    fail: (err) => {
      console.error('选择图片失败', err);
    }
  });
};

const goto_collection=()=>{
	uni.navigateTo({
		url:'/pages/notes_coll/notes_coll?type=coll'
	})
}
const goto_mynotes=()=>{
	uni.navigateTo({
		url:'/pages/notes_coll/notes_coll?type=mynotes'
	})
}
const goto_passwordchange=()=>{
	uni.navigateTo({
		url:'/pages/password_change/password_change'
	})
}


onMounted(()=>{
	getAvatar()
	getUsername()
})


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