<template>
	<view class="card">
		<view class="image">
			<image src="/common/images/test.jpg" mode="aspectFill"></image>
			<view class="badge">{{rank}}</view>
		</view>
		<view class="notImage">
			<view class="notDes">
				<view class="left">
					<view class="rank">
						{{rank}}
					</view>
					<view class="name">
						{{name}}
					</view>
				</view>
				<view class="right">
					<view class="score">
						{{score}}
					</view>
					<view class="stars">
						<uni-icons type="star-filled" v-for="i in Math.floor(score / 2)" color="gold"></uni-icons>
						<uni-icons type="star" v-for="i in 5-(Math.floor(score / 2))" color="gold"></uni-icons>
					</view>
				</view>
			</view>
			<view class="description">{{description}}</view>
		</view>

	</view>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  rank: { type: Number, default:1},
  name: { type: String, default: 'A教学楼' },
  score: { type: Number, default: 9.3 },
  description: { type: String, default: '饮水机水很好喝' },
})


</script>

<style lang="scss" scoped>
.card{
	display: flex;
	gap: 24rpx;
	margin: 16rpx;
	padding: 16rpx;
	border-bottom: 1px solid;
	.image{
		position: relative;
		width: 120rpx;
		height: 120rpx;
		border-radius: 20rpx;
		overflow: hidden;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.badge{
		color: #d16f58;
		position: absolute;
		top: -5rpx; /* 调整垂直位置，使其略微超出顶部 */
		left: -5rpx; /* 调整水平位置，使其略微超出左侧 */
		background: #f1d2aa;
		border-radius: 0 0 20rpx 0;
		border: 1px solid #d16f58;
		width: 40rpx;
		height: 40rpx;
		text-align: center;
		font-size: 18rpx;
		display: flex;          /* 新增 */
		align-items: center;    /* 垂直居中 */
		justify-content: center;/* 水平居中 */
	}
	.notImage{
		display: flex;
		flex-direction: column;
		width: 100%;
		.notDes{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.left{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				width: 30%;
				.rank{
					
					color: #d16f58;
					font-size: 50rpx;
				}
			}
			.right{
				display: flex;
				flex-direction: column;
				.score{
					display: flex;
					justify-content: right;
					font-size: 40rpx;
					font-weight: bold;
					color: $colorr;
				}
				.stars{
					color: gold;
				}
			}
		}
		.description{
			color: #9c7f34;
		}
	}

}

</style>