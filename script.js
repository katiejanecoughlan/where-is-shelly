const backgroundImages = [
    'url("https://source.unsplash.com/random/800x600?nature")',
    'url("https://source.unsplash.com/random/800x600?water")',
    'url("https://source.unsplash.com/random/800x600?mountain")',
    'url("https://source.unsplash.com/random/800x600?forest")'
];

const cutoutImages = [
    'url("https://source.unsplash.com/random/200x300?person")',
    'url("https://source.unsplash.com/random/200x300?portrait")',
    'url("https://source.unsplash.com/random/200x300?face")',
    'url("https://source.unsplash.com/random/200x300?model")'
];

const captions = [
    "Adventure awaits!",
    "Explore the unknown.",
    "Nature's beauty.",
    "The world is yours to see."
];

document.getElementById('shuffleBtn').addEventListener('click', () => {
    const randomBg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    const randomCutout = cutoutImages[Math.floor(Math.random() * cutoutImages.length)];
    const randomCaption = captions[Math.floor(Math.random() * captions.length)];

    document.querySelector('.background').style.backgroundImage = randomBg;
    document.querySelector('.cutout').style.backgroundImage = randomCutout;
    document.querySelector('.caption').textContent = randomCaption;
    document.querySelector('.caption').style.opacity = 1;
});

// Initial load
document.querySelector('.background').style.backgroundImage = backgroundImages[0];
document.querySelector('.cutout').style.backgroundImage = cutoutImages[0];
document.querySelector('.caption').textContent = captions[0];
document.querySelector('.caption').style.opacity = 1;

