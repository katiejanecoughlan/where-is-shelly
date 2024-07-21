const backgroundImages = [
    'url("https://unsplash.com/photos/brown-wooden-boat-moving-towards-the-mountain-O453M2Liufs")'
];

const cutoutImages = [
    'url("https://unsplash.com/photos/woman-wearing-blue-and-white-floral-spaghetti-strap-dress-gd0qpyteVFY")'
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

