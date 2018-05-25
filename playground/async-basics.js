console.log('stsrting-app');
setTimeout(() => {
console.log('inside of callback');
},2000);


setTimeout(()=>{
	console.log('zero delay');
},0);
console.log('finishin up');