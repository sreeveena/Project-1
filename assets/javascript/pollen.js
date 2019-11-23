//query url for pollen
function callpollen(ip) {
       
    var queryURL = "https://api.waqi.info/feed/here/?token=12f820d56fa3fd40bd4af15eae5097c9875e7bc5";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log(response)
        var weatherPollenAQI = response.data.aqi;
        console.log(weatherPollenAQI);
        //Different ranges for AQI (air quality index)
        if(weatherPollenAQI <=50){
             var notes= $('<div class="good">Good</div>');
         }else if(weatherPollenAQI >50 && weatherPollenAQI <=100){
             var notes= $('<div class="moderate">Moderate</div>');
         }else if(weatherPollenAQI >100 && weatherPollenAQI <=150){
             var notes= $('<div class="unhealthySen">Unhealthy for sensative groups</div>');
         }else if(weatherPollenAQI >150 && weatherPollenAQI <=200){
             var notes= $('<div class="unhealthy">Unhealthy</div>');
         }else if(weatherPollenAQI >200 && weatherPollenAQI <=300){
             var notes= $('<div class="veryUnhealthy">Very Unhealthy</div>');
         }else if(weatherPollenAQI >300 && weatherPollenAQI <=500){
             var notes= $('<div class="hazardous">Hazardous</div>');
         }
        $("#pollen").append(JSON.stringify(response.data.aqi));
        $("#pollen").append(notes);
        
    })
}
callpollen()
