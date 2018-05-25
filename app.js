const yargs=require('yargs');

const geocode=require('./geocode/geocode.js');

const weather=require('./weather/weather.js');
const express=require('express');
const hbs=require('hbs');

var app=express();
var port=process.env.PORT||3000;

app.set('view engine','hbs');
app.get('/',(req,res)=>{
res.render('index');
});






app.get('/:address',(req,res)=>{
	var address=req.params.add;
geocode.geocodeAddress(address,(errorMessage,results)=>{
	if(errorMessage){
		res.send(errorMessage);
	} else{
		weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
			if (errorMessage){
				res.send(errorMessage);
			} else{
				//res.send(`it's currently ${weatherResults.temperature}. it feels like ${weatherResults.apparentTemperature}`);
	res.render('result',{
		city:results.address,
		temp:weatherResults.temperature,
		apparenttemp:weatherResults.apparentTemperature,
		windspeed:weatherResults.windSpeed,
		humidity:weatherResults.Humidity,
		summary:weatherResults.summary

	})
			}

		});
	}
	});
});
	

app.listen(port,()=>{
	console.log(`server is on ${port}`);
});












// const argv=yargs
// .options({
// 	a:{
// 		demand:true,
// 		alias:'address',
// 		describe:'Address to fetch weather for',
// 		string:true
// 	}

// })
// .help()
// .alias('help','h')
// .argv;


// geocode.geocodeAddress(argv.address,(errorMessage,results)=>{

// if (errorMessage){
// 	console.log(errorMessage);

// } else {
// 	console.log(results.address);
// 	//console.log(JSON.stringify(results,undefined,2));
// 	weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
// 	if (errorMessage){
// 	console.log(errorMessage);

// } else {
// 	console.log(`it's currently ${weatherResults.temperature}. it feels like ${weatherResults.apparentTemperature}`);
// }

// });
// }

// });



