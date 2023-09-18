var cityname = '';
        var city = document.querySelector("input");
        var newbtn = document.querySelector("#btn");
        newbtn.addEventListener("click", function(){
            cityname = city.value;
            console.log(cityname);
            callAPI();
        });
        function callAPI(){
            
        link="https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=c783d496738a67f0f1032800e67a9f4a";
        var request = new XMLHttpRequest();
        request.open('GET',link,true);
        request.onload = function(){
            var obj = JSON.parse(this.response);
            console.log(obj);
            document.getElementById('weather').innerHTML=obj.weather[0].description;
            document.getElementById('location').innerHTML=obj.name;
            document.getElementById('temp').innerHTML=Math.round(obj.main.temp - 273.15);
        }
    if(request.status>=200 && request.status<400){
        var temp=obj.main.temp;
    }
    else{
        console.log("The city data is not available");
    }
    request.send();
        }