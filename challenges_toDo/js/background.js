const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const url = `./img/${chosenImage}`;

document.body.style.backgroundImage = `url(${url})`;
document.body.style.height = '100vh';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';
