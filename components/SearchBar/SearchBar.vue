<template>
  <view class="search-wrapper">
	  <view class="inner">
	  	<uni-icons type="search"></uni-icons>
	  	<input
	  	  class="search-input"
	  	  type="text"
	  	  v-model="keyword"
	  	  :placeholder="placeholder"
	  	  @confirm="handleSearch"
	  	  confirm-type="search"
	  	/>
	  </view>

  </view>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  pageType: { type: String, default: '' },
  placeholder: { type: String, default: '点击搜索...' }
})

const emit = defineEmits(['search'])

const keyword = ref('')

function handleSearch() {
  emit('search', {
    keyword: keyword.value.trim(),
    pageType: props.pageType
  })
}
</script>

<style scoped lang="scss">
.search-wrapper {
  padding: 20rpx;
}
.inner{
	height: 60rpx;
	background-color: #f0f0f0;
	display: flex;
	align-items: center;
	width: 100%;
	padding: 0 20rpx;
	border-radius: 30rpx;
	border: 1px solid #ddd;
	gap: 20rpx;
}

.search-input {
 
  font-size: 28rpx;
  color: #333;
}
</style>
