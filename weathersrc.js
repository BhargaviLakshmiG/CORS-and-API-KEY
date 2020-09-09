var request= new XMLHttpRequest();
//var url_string="https://api.openweathermap.org/data/2.5/forecast?q=London&APPID=cf8aa0b1474d506375c37d9e4a3eef90";//for weather by city name with API key included in URL string
//var url_string="https://api.openweathermap.org/data/2.5/forecast?id=1264527&APPID=cf8aa0b1474d506375c37d9e4a3eef90"; //to get weather by cityid
var url_string="https://api.openweathermap.org/data/2.5/weather?zip=94040&appid=cf8aa0b1474d506375c37d9e4a3eef90"; //to get weather by zipcode
request.open("GET",url_string,true);
request.send();
request.onload=function () { 
var data=JSON.parse(this.response);
for(var i in data)
console.log(data[i]);
};
