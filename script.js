//Async function to fetch data from ipgeolocation api
async function FetchData() {
  document.querySelector(".section2").classList.add('block')
  await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=355eb7ae53bf40c49d7141e236b2ed28")
    .then(Response => Response.json())
    .then(data => {
      console.log(data)
      const latitude = data.latitude;
      const longitude = data.longitude;
      document.querySelector(".map").innerHTML +=` 

      <div class="Lat">
        Lat:${latitude}
      </div>
      <div class="long">
        Long:${longitude}
      </div>
      <iframe src="https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed"
       frameborder="0" style=border:"0"></iframe>`
       
       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a45837f76348defbfe4ebb2ba4919887
       `)
        .then(Response2 => Response2.json())
        .then(data2 =>{
          console.log(data2)
          document.getElementsByClassName(".details").innerHTML+=`
          <div>Location:${data2.name}</div><br>
            <div>Long:${data2.coord.lon}</div><br>
            <div>Time zone:${data2.timezone}</div><br>
            <div>Wind Speed:${data2.wind.speed}</div><br>
            <div>Pressure:${data2.main.pressure}</div><br>
            <div>Humidity:${data2.main.humidity}</div><br>
            <div>Wind Direction:${data2.wind.deg}</div><br>
            <div>Feels Like:${data2.weather[0].main}</div><br>
            <div>Lat:${data2.coord.lat}</div><br>
    `
        });
    });
};