 const SearchInput = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button")
        const WeatherIcon = document.querySelector(".weather-icon");
        const apiKey = "2b56370816f892c11137f36094270253";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        async function CheckWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
                document.querySelector(".error").style.display = "none";
                var data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

            if(data.weather[0].main == "Clouds"){
                WeatherIcon.src = "Images/clouds.png";
            }
            else if(data.weather[0].main == "clear"){
                WeatherIcon.src = "Images/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                WeatherIcon.src = "Images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                WeatherIcon.src = "Images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                WeatherIcon.src = "Images/mist.png";
            }
            else if(data.weather[0].main == "Clear"){
                WeatherIcon.src = "Images/clear.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                WeatherIcon.src = "Images/drizzle.png";
            }
            else if(data.weather[0].main == "Snow"){
                WeatherIcon.src = "Images/snow.png"
            }

            document.querySelector(".weather").style.display = "block"
            }


            

        }
        

            
        

            searchBtn.addEventListener("click", ()=>{
            CheckWeather(SearchInput.value);
        })