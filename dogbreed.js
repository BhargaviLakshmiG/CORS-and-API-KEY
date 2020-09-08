var request= new XMLHttpRequest();
//var url_string="https://restcountries.eu/rest/v2/all";
var url_string="https://dog.ceo/api/breeds/list/all";
request.open("GET",url_string,true);
request.send();
request.onload=function () { 
var data=JSON.parse(this.response);

for(var i in data)
console.log(data[i]);
};
