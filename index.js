const author = document.querySelector('.author');
const cryptoName = document.querySelector('.name');
const cryptoImg = document.querySelector('.crypto-img');
const cryptoPrice = document.querySelector('.price');
const cryptoHigh = document.querySelector('.high');
const cryptoLow = document.querySelector('.low');
const clock = document.querySelector('.time');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const locationName = document.querySelector('.location-name');

fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        document.body.style.backgroundImage = `url(${data.urls.full})`;
        author.textContent = `By: ${data.user.name}`;
    })
    .catch(err => {
        console.error(err)
        document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1541788464282-8219dee793cc?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzUzMzk4NDQ&ixlib=rb-1.2.1&q=85')`;
        author.textContent = `By: ${data.user.name}`;
    });

fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        cryptoImg.src = `${data.image.small}`;
        cryptoName.textContent = `${data.name}`;
        cryptoPrice.textContent = `🎯: $${data.market_data.current_price.usd}`;
        cryptoHigh.textContent = `👆: $${data.market_data.high_24h.usd}`;
        cryptoLow.textContent = `👇: $${data.market_data.low_24h.usd}`;
    })
    .catch(err => console.error(err));

const getCurrentTime = () => {
    let date = new Date();
    clock.textContent =  date.toLocaleTimeString("en-gb");
};

setInterval(getCurrentTime, 1000);

const uri = 'https://apis.scrimba.com/openweathermap/data/2.5/weather'

navigator.geolocation.getCurrentPosition(position => {
    fetch(`${uri}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw Error('Weather data not available');
            }
            return response.json();
        })
        .then(data => {
            // console.log(data);
            // console.log(data.weather[0]);
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            // console.log(iconUrl);
            weatherIcon.src = iconUrl;
            temperature.textContent = `${Math.round(data.main.temp)}ºC`;
            locationName.textContent = `${data.name}`;
        } )
        .catch(err => console.error(err));
});