<template>
  <view class="login-container pagebg">
    <view class="header">
      <text class="title">我的商小</text>
    </view>
    
    <view class="form-container">
      <view class="input-group">
        <text class="label">邮箱</text>
        <input
          class="input" 
          type="text" 
          placeholder="请输入邮箱"
          v-model="formData.email"
        />
        
      </view>
      <view class="input-group">
        <text class="label">验证码</text>
		
        <input 
          class="input email" 
          type="text" 
          placeholder="请输入验证码"
          v-model="formData.verify"
        />
		<view class="getVerify" @click="send_verify_code">获取验证码</view>
      </view>
      
      <view class="input-group">
        <text class="label">密码</text>
        <input 
          class="input" 
          type="password" 
          placeholder="请输入密码"
          v-model="formData.password"
        />
      </view>
	  <view class="input-group">
        <text class="label">再次输入密码</text>
        <input 
          class="input" 
          type="password" 
          placeholder="请再次输入密码"
          v-model="formData.password2"
        />
      </view>
	  
      
      <button class="login-btn" @click="handleLogin">注册</button>
      
      <view class="register-link" @click="gotoLogin">
        <text>登录？</text>
      </view>
    </view>
    <view class="footer">
    	<img src="@/common/images/zjgsu.jpg" alt="" />
    </view>

  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';

// 表单数据
const formData = ref({
  email: '',
  verify:'',
  password: '',
  password2:''
});

const gotoLogin=()=>{
	uni.redirectTo({
		url:'/pages/login/login'
	})
}
// 登录处理
const handleLogin = () => {
  if (!formData.value.email) {
    uni.showToast({
      title: '请输入邮箱',
      icon: 'none'
    });
    return;
  }
  
  if (!formData.value.password) {
    uni.showToast({
      title: '请输入密码',
      icon: 'none'
    });
    return;
  }
};

function send_verify_code(){
	uni.request({
		url:'http://127.0.0.1:8000/user/send_code',
		method:'POST',
		data:{
			email:formData.value.email
		},
		success:(res)=>{
			console.log(res.data);
		}
	})
}
onLoad(() => {
  // 页面加载时可以做的初始化操作
});
</script>

<style lang="scss">
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40rpx;
  height: 100vh;
  box-sizing: border-box;
}

.header {
  margin-top: 100rpx;
  margin-bottom: 80rpx;
  
  .title {
    font-size: 48rpx;
    font-weight: bold;
    color: #91bf6f;
  }
}

.form-container {
  width: 100%;
  
  .input-group {
    margin-bottom: 40rpx;
    display: flex;
	justify-content: center;
	align-items: center;
    .label {
		display: flex;
		align-items: left;
		justify-content: left;
      white-space: nowrap;
	  text-align: left;
	  line-height: 100%;
      font-size: 28rpx;
      margin-bottom: 16rpx;
	  margin-right: 32rpx;
      color: #333;
	  width: 40%;
    }
    
    .input {
      width: 100%;
      height: 80rpx;
      border: 1rpx solid #ddd;
      border-radius: 8rpx;
      padding: 0 20rpx;
      box-sizing: border-box;
      font-size: 28rpx;
    }
	.email{
		width: 50%;
	}
	.getVerify{
		width: 40%;
		height: 80rpx;
		margin-left: 30rpx;
		background-color: $colorr;
		color: white;
		border-radius: 20rpx;
		justify-content: center;
		display: flex;
		align-items: center;
		white-space: nowrap;
		font-size: 28rpx;
	}
  }
  
  .login-btn {
    width: 100%;
    height: 88rpx;
    background-color: $colorr;
    color: white;
    border-radius: 44rpx;
    font-size: 32rpx;
    margin-top: 60rpx;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .register-link {
    margin-top: 30rpx;
    text-align: right;
    
    text {
		text-align: right;
      font-size: 28rpx;
      color: #666;
    }
  }
}


</style>