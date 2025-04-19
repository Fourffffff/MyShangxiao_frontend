<template>
	<view class="notesPage">
		<view class="seachAndPost">
			
			<SearchBar></SearchBar>
			<img src="/common/images/add.png" alt="" @click="toNotePosting"/>
		</view>

		<view class="notes">
			<NoteCard  v-for="i in 10"/>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
function toNotePosting(){
	uni.navigateTo({
		url:'/pages/notePosting/notePosting'
	})
}
</script>

<style lang="scss" scoped>
.notesPage{
	.seachAndPost{
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin: 20rpx;
		padding: 10rpx;

		img{
			width: 60rpx;
			height: 60rpx;
		}
	}

	.notes{
		column-count: 2;
		column-gap: 20rpx;
		NoteCard {
		  break-inside: avoid; // 防止卡片被打断
		  width: 100%;
		}
	}
	
}
</style>
