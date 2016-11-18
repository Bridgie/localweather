$.getJSON('http://ipinfo.io', function(data){
  $("#addText").html("<p>" + data.city + "</p>");
  $("#country").html("<p>" + data.country)
  var str = data.loc
  var res = str.split(",")
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+ res[0] + '&lon=' + res[1] +'&APPID=1d46d522f007752f3b72c816fa2327a9'+"&units=metric", function (response){
    $("#weather").html("<p>" + response.weather[0].description + "</p>")
    $("Document").ready(function(getIcon){
      if(response.weather[0].main == "Clear"){
        $("i").addClass("wi wi-day-sunny")
      } else if(response.weather[0].main == "Drizzle"){
        $("i").addClass("wi wi-day-sprinkle")
      } else if (response.weather[0].main == "Clouds") {
        $("i").addClass("wi wi-day-cloudy")
      } else if (response.weather[0].main == "Rain") {
        $("i").addClass("wi wi-day-rain")
      } else if (response.weather[0].main == "Snow") {
        $("i").addClass("wi wi-day-snow")
      } else if (response.weather[0].main == "Thunderstorm") {
        $("i").addClass("wi wi-day-thunderstorm")
      }
$("#temperature").html("<p class='numbertemp'>" + response.main.temp)
$("button").click(function(){
  if ($("button").hasClass("celsius")){
  var temp = (((response.main.temp * 9)/5) + 32)
   $("button").removeClass("celsius")
  $("button").addClass("farenheit")
      $("button").empty();
    $("button").append("F")
  } else if ($("button").hasClass("farenheit")){
    temp = response.main.temp
    $("button").removeClass("farenheit")
    $("button").addClass("celsius")
    $("button").empty();
    $("button").append("C")
  }
  $("#temperature").html("<p class='numbertemp'>" + temp)
});
      $("#other").html("<p>" + "Humidity " + response.main.humidity)
      $("#other2").html("<p>" + "Pressure  " + response.main.pressure)
    });
  });
});
