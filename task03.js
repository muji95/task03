//1. create a XHR object
var req= new XMLHttpRequest();
//2. open a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//3. send the connection
req.send();
req.onload=function()
{
    var data=JSON.parse(this.response);
    for(i=0;i<data.length;i++)
    {
        let countryName = data[i].name;
        let lat = data[i].latlng[0];
        let lon = data[i].latlng[1];
        weather(countryName,lat,lon);    
    }
}
function weather(countryName, lat, lon)
{
var req1 = new XMLHttpRequest();
        if (lat!=undefined && lon!=undefined)
        {
        req1.open('GET',"http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=04747a7bcf6f24893a3ce9de76ab8af2",true);
        req1.send();
        req1.onload=function()
            {
            var data1 = JSON.parse(this.response);
            let temp = data1.main.temp;
            console.log(countryName+" "+temp);
            }   
        }
    }