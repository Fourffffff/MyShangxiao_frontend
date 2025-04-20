<template>
	<view>
		<view class="up_intro">
			<view class="image">
				<image src="/common/images/test.jpg" mode="aspectFill"></image>
			</view>
			<view class="unimage">
				<view class="name">
					{{name}}
				</view>
				<view class="intro">
					{{intro}}
				</view>
				<view class="type">
					{{type}}
				</view>
				<view class="ope">
					<view class="fav op">
						<uni-icons type="star"></uni-icons>
						收藏
					</view>
					<view class="map op">
						<uni-icons type="map"></uni-icons>
						地图
					</view>
				</view>
				
			</view>
		</view>
		<view class="middle-rate">
		  <view class="score-box">
		    <view class="left-score">9.3</view>
		    <view class="right-bars">
		      <view class="bar-line" v-for="i in 5" :key="i">
		        <view class="stars">
		          <text v-for="j in 5-i+1" :key="j" class="star">★</text>
		        </view>
		        <view class="bar-bg">
		          <view class="bar-fill" :style="{ width: getBarWidth(i) + '%' }"></view>
		        </view>
		      </view>
		    </view>
		  </view>
		  <view class="rate-footer">30人参与评分</view>
		</view>

		<view class="down_comment">
			<NoteComment v-for="i in 10"
				username="流星"
				avatarUrl="/common/images/test.jpg"
				:time="time"
				comment="这个产品真的很好用，界面清爽，功能也很实用！"
				:likeCount="100"
				:islike="true"
				:starNum="3"
			/>
		</view>
		<CommentPosting></CommentPosting>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const name=ref("A教学楼")
const intro=ref("简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介")
const type=ref("教学楼评测")
function getBarWidth(index) {
	// 模拟五个评分档位的比例（5~1星），单位：百分比
	const widths = [80, 60, 30, 10, 5]
	return widths[index - 1]
}
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
</script>

<style lang="scss" scoped>
.up_intro{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	.image{
		width:300rpx;
		height:400rpx;
		border-radius: 16rpx;
		margin: 16rpx;
		overflow: hidden;
		image{
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
	}
	.unimage{
		display: flex;
		flex-direction: column;
		margin: 24rpx;
		width: 420rpx;
		gap: 30rpx;
		.name{
			font-weight: bold;
		}
		.type{
			background: linear-gradient(#CCF783,white);
			color:#CBA43F ;
			border-radius: 16rpx;
			border: $colorr 1px solid;
			text-align: center;
			height: 48rpx;
			line-height: 48rpx; 
			padding: 0 16rpx;
		}
		.ope{
			display: flex;
			justify-content: space-around;
			.op{
				border: 1px solid;
				border-radius: 16rpx;
				padding:0 16rpx;
			}
		}
	}
}
.middle-rate {
	background-color: #999;
	padding: 18rpx;
	border-radius: 16rpx;
	color: white;
	display: flex;
	flex-direction: column;
	text{
		text-align: right;
	}
	margin: 24rpx;
	.score-box {
		display: flex;
		align-items: center;
		border-bottom:  1px solid;
		.left-score {
			font-size: 50rpx;
			font-weight: bold;
			margin-right: 30rpx;
			flex: 3;
			display: flex;
			justify-content: center;
			
		}

		.right-bars {
			flex: 1;
			display: flex;
			flex-direction: column;
			flex: 7;
			.bar-line {
				display: flex;
				align-items: center;

				.stars {
					width: 120rpx;
					color: gold;
					font-size: 24rpx;
				}

				.bar-bg {
					flex: 1;
					height: 16rpx;
					background: white;
					border-radius: 8rpx;
					overflow: hidden;
					margin-left: 10rpx;

					.bar-fill {
						height: 100%;
						background: #fba91c;
					}
				}
			}
		}
	}

	.rate-footer {
		text-align: center;
		font-size: 24rpx;
		margin-top: 16rpx;
		color: #eee;
	}
}
.down_comment{
	padding-bottom: 120rpx
}

</style>
