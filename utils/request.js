const baseurl="http://localhost:8000"
export function request(config={}){
	const token = uni.getStorageSync('token')
	
	let {
		url,
		method='GET',
		data,
		header = {
					Authorization: token ? `Bearer ${token}` : ''
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