var asyncAdd=(a,b)=>{
return new Promise((resolve,reject)=>{
	setTimeout(()=>{
if(typeof a==='number' && typeof b==='number'){
	resolve(a+b);
}else {
	reject('Arguments must be numbers');
}
	},1500);

});
};

asyncAdd(3,4).then((res)=>
{
console.log(res);
},(errormessage)=>{
	console.log(errormessage);
})

// var somePromise=new Promise((resolve,reject)=>{
// setTimeout(()=>{
// resolve('Hey,it worked!');
// },2500)
// })

// somePromise.then((message)=>{
// console.log('sucsess:',message);
// }, (errormessage)=>{
// 	console.log('error:', errormessage);
// });