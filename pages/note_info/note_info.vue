<template>
	<view class="note_info">
		
		<view class="pic" @click="preview">
			<swiper :indicator-dots="true" class="swp">
				<!-- <view class="backBtn" @click="goBack">
					<uni-icons type="back"></uni-icons>
				</view> -->
				<swiper-item v-for="imageUrl in imageUrls">
					<view class="swiper-item" >
						<image :src="imageUrl" mode="aspectFill" class="img"></image>
					</view>
				</swiper-item>
			</swiper>
			
		</view>
		<view class="text">
			<view class="titleAndContent">
				<view class="title">
					{{title}}
				</view>
				<view class="content">
					{{content}}
				</view>
			</view>
			
			<view class="otherInfo">
				<view class="time">
					{{time}}
				</view>
				<view class="likeAndFavourite">
					<view class="like">
						<view class="likeIcon">
							<uni-icons :type="isliked?'hand-up-filled':'hand-up'" color="#91bf6f"></uni-icons>
						</view>
						<view class="likeNum">
							{{likeCount}}
						</view>
					</view>
					<view class="favourite">
						<view class="FavIcon">
							<uni-icons :type="isFav?'star-filled':'star'" color="#91bf6f"></uni-icons>
						</view>
						<view class="favNum">
							{{favCount}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="commentList">
			<view class="comment" v-for="i in 10">
				<NoteComment
					username="流星"
					avatarUrl="/common/images/test.jpg"
					:time="time"
					comment="这个产品真的很好用，界面清爽，功能也很实用！"
					:likeCount="100"
					:islike="true"
					:starNum="4"
				/>
			
			
			</view>
		</view>
		
		<CommentPosting></CommentPosting>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const imageUrls = ref(['/common/images/test.jpg','/common/images/test.jpg'])
const title = ref('title')
const content=ref('contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent')
const time=ref(new Date())
const likeCount=ref(10)
const favCount=ref(10)
const isliked=ref(false)
isliked.value=true
const isFav=ref(false)
isFav.value=true
function formatDate(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  const h = String(date.getHours()).padStart(2, '0')
  const min = String(date.getMinutes()).padStart(2, '0')
  const s = String(date.getSeconds()).padStart(2, '0')
  return `${y}-${m}-${d} ${h}:${min}:${s}`
}

const now = new Date()
time.value = formatDate(now)
function preview(){
	uni.previewImage({
		current:imageUrls.value[0],
		urls:imageUrls.value
	})
}
// function goBack(){
// 	uni.navigateBack()
// }
</script>

<style lang="scss" scoped>
.pic{
	width:100%;
	height: 560rpx;
	.img{
		width: 100%;
		
	}
	.swp{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.backBtn{	
		position: absolute;
		top: 20rpx;
		left: 20rpx;
		z-index: 10;
		
		border-radius: 50%;
		padding: 10rpx;
		
	}
}
.text{
	margin: 16rpx;
	padding: 8rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-bottom: 1px solid;
	gap: 16rpx;
	.titleAndContent{
		.title{
			font-size: 48rpx;
			font-weight: bold;
		}
		.content{
			white-space: normal;
			width: 100%;
			word-break: break-word;
			overflow-wrap: break-word;
			font-size: 28rpx;
		}
		
	}
	.otherInfo{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.time{
			display: flex;
			flex-direction: row;
			align-items: flex-end;
			font-weight: lighter;
			text-align: center;
		}
		.likeAndFavourite{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			gap: 16rpx;
			.like{
				.likeNum{
					font-size: 24rpx;
				}
			}
			.favourite{
				.favNum{
					font-size: 24rpx;
				}
			}
		}
	}
	
}
.commentList{
	padding-bottom: 120rpx
}

</style>
