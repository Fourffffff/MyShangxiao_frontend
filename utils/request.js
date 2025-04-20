const baseurl="http://localhost:8000"
export function request(config={}){
	let {
		url,
		method='GET',
		data,
		header = {
					"Content-Type": "application/json"  // 默认 JSON 请求头
				}
	} = config
	url=baseurl+url
	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			data,
			header,
			method,
			success:res=>{
				if(res.data.code==200){
					resolve(res.data)
				}else if(res.data.code===400){
					uni.showModal({
						title:'错误提示',
						content:res.data.msg
					})
					reject(res.data)
				}else{
					uni.showToast({
						title:res.data.errMsg,
						icon:'none'
					})
					reject(res.data)
				}
			},
			fail:err=>{
				reject(err)
			}
		})
		
	})
}