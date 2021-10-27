const author = document.querySelector('.author');
const cryptoName = document.querySelector('.name');
const cryptoImg = document.querySelector('.crypto-img');

fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        document.body.style.backgroundImage = `url(${data.urls.full})`;
        author.textContent = `By: ${data.user.name}`;
    })
    .catch(err => {
        document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1541788464282-8219dee793cc?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzUzMzk4NDQ&ixlib=rb-1.2.1&q=85')`;
        author.textContent = `By: ${data.user.name}`;
    });

fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
.then(response => response.json())
.then(data => {
    console.log(data);
    cryptoImg.src = `${data.image.small}`;
    cryptoName.textContent = `${data.name}`;
})
.catch(err => console.error(err));    

