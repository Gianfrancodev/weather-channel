// api Key a1d03ba316ac66bfc535b4a02831697f
const apiUrl = 

function getCurrentWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+$('#search').val()+"&appid=a1d03ba316ac66bfc535b4a02831697f&units=imperial")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        $("#currentDate").text(data.name + " (Today)")
        $("#currentTemp").text("temp:" + data.main.temp + "°F")
        $("#currentWind").text("wind:" + data.wind.speed)
        $("#currentHum").text("humidity:" + data.main.humidity)
    })


}
 let fiveDayForecast = []
function getFutureWeather() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+$('#search').val()+"&appid=a1d03ba316ac66bfc535b4a02831697f&units=imperial")
    .then(res => res.json())
    .then(data => {
       let uniqueForecastDay = [];
       fiveDayForecast =data.list.filter(forecast => {
        const forecastDate = new Date(forecast.dt_txt).getDate();
        if(!uniqueForecastDay.includes(forecastDate)) {
            return uniqueForecastDay.push(forecastDate);
        }
    });
    console.log(fiveDayForecast)
    console.log()
    for (var i =0; i<fiveDayForecast.length-1; i++) {
        let day = fiveDayForecast[i]
        console.log(`Date ${day.dt_txt}`)
        document.getElementById(`date${i+1}`).innerHTML = `Date ${day.dt_txt}`
        document.getElementById(`date${i+1}`).innerHTML = `Date ${day.dt_txt}`
        document.getElementById(`temp${i+1}`).innerHTML = `temp ${day.main.temp} °F`
        document.getElementById(`wind${i+1}`).innerHTML = `wind ${day.wind.speed}`
        document.getElementById(`hum${i+1}`).innerHTML = `hum ${day.main.humidity}`
    
    }
      
    })
}