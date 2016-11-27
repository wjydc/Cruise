// 数据请求
let request={};
request.get=function(url){
	return fetch(url)
		.then((response)=>response.json());
}

request.post=function(url){
	return fetch(url,{
		method:'POST',
		headers:{
			'Accept':'application/json',
			'Content-Type':'application/json'
		},
		body:JSON.stringify('')
	}).then((response)=>response.json());
}

module.exports=request;