const yargs=require('yargs');
const axios=require('axios');


const argv=yargs
.options({
	a:{
		demand:true,
		alias:'address',
		describe:'Address to fetch weather for',
		string:true
	}

})
.help()
.alias('help','h')
.argv;

var add=encodeURIComponent(argv.address);
var geocodeUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=${add}`;







app.listen(port,()=>{
	console.log(`Started up at port ${port}`);
});


axios.get(geocodeUrl).then((response)=>{

		if(response.data.status==='ZERO_RESULTS'){
			throw new Error('Unable to find the address');
		}
       var latitude=response.data.results[0].geometry.location.lat;
		var longitude=response.data.results[0].geometry.location.lng;
		var weatherUrl=`https://api.darksky.net/forecast/731d940b0a48f6049f9b5f7ec4de15a7/${latitude},${longitude}`;
	
console.log(response.data.results[0].formatted_address);
return axios.get(weatherUrl);
}).then((response)=>{
var temperature=response.data.currently.temperature;
var apparentTemperature=response.data.currently.apparentTemperature;
console.log(`it's currently ${temperature}, it feels like ${apparentTemperature}.`);
	
	}).catch((e)=>{
		if(e.code==='ENOTFOUND'){
			console.log('Unable to connect to API server');
		} else {
			console.log(e.message);
		}
		
	});


	
	

