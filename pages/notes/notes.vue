<template>
	<view class="notesPage pagebg">
		<view class="seachAndPost">
			
			<SearchBar></SearchBar>
			<img src="/common/images/add.png" alt="" @click="toNotePosting"/>
		</view>

		<view class="notes">
			<NoteCard v-for="note in notes"
			      :imageUrl="note.images[0]"
			      :title="note.title"
			      :content="note.content"
			      :author="note.username"
			      :avatarUrl="note.avatarUrl"
			      :like="note.isliked"
			      :likes="note.likes"
				  @click="to_note_info(note.id)"
			    />
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { request } from '../../utils/request';
import { onLoad,onShow } from '@dcloudio/uni-app'


const notes=ref([])
const id=uni.getStorageSync("id")

function toNotePosting(){
	uni.navigateTo({
		url:`/pages/notePosting/notePosting`,
	})
}
function to_note_info(id){
	uni.navigateTo({
		url:`/pages/note_info/note_info?id=${id}`
	})
}
const getNotes = async()=>{
	let res = await request({
		url:'/note/get_all'
	})
	
	if(res.code==200){
		
		notes.value=res.data
	}
}


onShow(()=>{
	getNotes()
})
</script>

<style lang="scss" scoped>
.notesPage{
	padding: 20rpx;
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
