<template>
	<view class="note-comment">
		<view class="header">
			<image class="avatar" :src="avatarUrl" mode="aspectFill"></image>
			<view class="info">
				<view class="name">{{ username }}</view>
				<view class="starsAndTime">
					<template v-if="starNum">
						<view class="stars">
							<uni-icons v-for="i in starNum" :key="i" type="star-filled" size="18" color="#f8b500" />
							<uni-icons v-for="i in 5-starNum" :key="i" type="star" size="18" color="#f8b500" />
						</view>
						<view class="time">{{ time }}</view>
					</template>
					<template v-else>
						<view class="time no-stars">{{ time }}</view>
					</template>
				</view>
			</view>
		</view>

		<view class="content">
			{{ comment }}
		</view>

		<!-- <view class="footer">
			<view class="like">
				<uni-icons :type="islike?'hand-up-filled':'hand-up'" size="20" color="#91bf6f" />
				<text class="like-count">{{ likeCount }}</text>
			</view>
		</view> -->
	</view>
</template>

<script setup>
defineProps({
	username: String,
	avatarUrl: String,
	time: String,
	comment: String,
	likeCount: Number,
	islike:Boolean,
	starNum:Number
})
</script>

<style lang="scss" scoped>
.note-comment {
	padding: 20rpx;
	border-bottom: 1px solid #eee;

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;

		.avatar {
			width: 60rpx;
			height: 60rpx;
			border-radius: 50%;
			margin-right: 20rpx;
		}

		.info {
			display: flex;
			flex-direction: column;
			flex: 1;

			.name {
				font-weight: bold;
				font-size: 28rpx;
			}

			.starsAndTime {
				display: flex;
				align-items: center;
				gap: 16rpx;
				margin-top: 4rpx;

				.stars {
					display: flex;
					gap: 4rpx;
				}

				.time {
					color: #888;
					font-size: 24rpx;
				}

				.no-stars {
					margin-top: 4rpx;
				}
			}
		}
	}

	.content {
		margin-top: 16rpx;
		font-size: 28rpx;
		word-break: break-word;
		line-height: 1.6;
		color: #333;
	}

	.footer {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 16rpx;

		.like {
			display: flex;
			align-items: center;
			gap: 8rpx;

			.like-count {
				font-size: 24rpx;
				color: #999;
			}
		}
	}
}
</style>
