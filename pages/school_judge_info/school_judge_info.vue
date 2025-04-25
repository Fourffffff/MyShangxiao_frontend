<template>
	<view>
		<view class="up_intro">
			<view class="image">
				<image :src="judge.image" mode="aspectFill"></image>
			</view>
			<view class="unimage">
				<view class="name">
					{{judge.name}}
				</view>
				<view class="intro">
					{{judge.description}}
				</view>
				<view class="type">
					No.{{judge.rank}} {{judge.type}}
				</view>
				<view class="ope">
					<view class="fav op" @click="likechange">
						<uni-icons type="heart" v-if=" !judge.islike" color="#91bf6f"></uni-icons>
						<uni-icons type="heart-filled" v-else color='#91bf6f'></uni-icons>
						喜欢
					</view>
					<view class="map op">
						<uni-icons type="map"></uni-icons>
						地图
					</view>
				</view>
				<view class="rate">
					<uni-rate v-model="judge.myscore"></uni-rate>
					<view class="confirm" @click="makeScore">
						确认
					</view>
				</view>
			</view>
		</view>
		<view class="middle-rate">
		  <view class="score-box">
		    <view class="left-score">{{judge.score.toFixed(1)}}</view>
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
		  <view class="rate-footer">{{judge.count}}人参与评分</view>
		</view>

		<view class="down_comment">
			<NoteComment v-for="comment in comments"
				:username="comment.username"
				avatarUrl="/common/images/test.jpg"
				:comment="comment.content"
				:likeCount="100"
				:islike="true"
				:starNum="comment.score"
			/>
		</view>
		<CommentPosting
		kind="judge"
		:obj_id="judgeid"
		:user_id="id"></CommentPosting>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { request } from '../../utils/request';
import { onLoad } from '@dcloudio/uni-app'


const judge = ref({
  name: '',
  description: '',
  type: '',
  star1: 0,
  star2: 0,
  star3: 0,
  star4: 0,
  star5: 0,
  rank: 0,
  score: 0,
  count: 0,
  myscore:0,
  islike:false,
  image:''
})
const comments=ref([])
const myscore=ref(5)
let id=0
let judgeid=0

function getBarWidth(index) {
	// 模拟五个评分档位的比例（5~1星），单位：百分比
	const widths = [judge.value.star5,judge.value.star4,judge.value.star3,judge.value.star2,judge.value.star1]
	return widths[index - 1]/judge.value.count*100
}


const get_one=async(judgeid)=>{
	let res=await request({
		url:'/judge/get_one',
		data:{
			judgeid:judgeid,
			userid:id
		}
	})
	judge.value=res.data
	console.log(judge.value);
}

const get_comments=async(id)=>{
	let res=await request({
		url:'/judge/get_comments',
		data:{
			id:id
		}
	})
	comments.value=res.data
}

const makeScore=async()=>{
	let res=await request({
		url:'/judge/rate',
		method:'post',
		data:{
			id_user:id,
			id_judge:judgeid,
			score:judge.value.myscore
		}
	})
	
}

const likechange=async()=>{
	let res=await request({
		url:'/judge/likechange',
		method:'post',
		data:{
			id_user:id,
			id_judge:judgeid
		}
	})
	if (res.code==200){
		judge.value.islike=!judge.value.islike
	}
}


onLoad((options)=>{
	judgeid=options.judgeId
	id=uni.getStorageSync("id")
	get_one(judgeid)
	get_comments(judgeid)
})
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
		.rate{
			margin: 24rpx 0;
			display: flex;
			justify-content: space-around;
			.confirm{
				background-color: $colorr;
				padding:0 16rpx;
				color: white;
				border-radius: 20rpx;
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
