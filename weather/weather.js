const request=require('request');

var getWeather=(latitude,longitude,callback)=>{
request({
	url:`https://api.darksky.net/forecast/731d940b0a48f6049f9b5f7ec4de15a7/${latitude},${longitude}`,
	json:true,
},(error,response,body)=>{
	if(!error && response.statusCode===200){
		callback(undefined,{
			temperature:body.currently.temperature,
			apparentTemperature:body.currently.apparentTemperature,
			Humidity:body.currently.humidity,
			windSpeed:body.currently.windSpeed,
			summary:body.currently.summary


		});
		
		
		
	} else {

		callback("unable to fetch weather");
	} 
	
	
	
});
};

module.exports.getWeather=getWeather;