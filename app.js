window.addEventListener("load", ()=> {
    let long
    let lat

    let temperatureDescription = document.querySelector(".temperature-description")
    let temperatureDegree = document.querySelector(".temperature-degree")
    let locationTimezone = document.querySelector(".location-timezone")
    let tempretureSection = document.querySelector(".temperature")
    const temperatureSpan = document.querySelector(".temperature span")


    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=402a2ccb6b7af8cbf18fbb7bd83b112b`

            fetch(api)
            .then(response => {
                return response.json()
            })
            .then(data => {
                const {temp} = data.main
                const {main} = data.weather[0]

                //
                let fahrenheit = Math.round(((parseFloat(temp)-273.15)*1.8)+32)
                let celcius = Math.round(parseFloat(temp)-273.15)

                temperatureDescription.textContent = main
                locationTimezone.textContent = data.name
                //Set DOM elements from the api
                temperatureDegree.textContent = fahrenheit

                temperatureDescription.textContent = main
                locationTimezone.textContent = data.name

                
 
                document.getElementById('icon').src="http://openweathermap.org/img/w/"+data.weather[0].icon+".png"

                //
                tempretureSection.addEventListener("click", () => {
                    if (temperatureSpan.textContent === "F") {
                        temperatureSpan.textContent = "C"
                        temperatureDegree.textContent = celcius
                    }
                    else {
                        temperatureSpan.textContent = "F"
                        temperatureDegree.textContent = fahrenheit
                    }
                })

            })

            
        })  
    }
    else {
        h1.textContent = "Hey! This is not working because of reasons"
    }

    
})