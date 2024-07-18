const quotes = [
    "I need a six-month vacation, twice a year.",
    "Jet lag is for amateurs.",
    "If traveling was free, you'd never see me again.",
    "I haven’t been everywhere, but it’s on my list.",
    "Adventure may hurt you but monotony will kill you."
];

const backgrounds = [
    "#FFB6C1",
    "#87CEFA",
    "#98FB98",
    "#FFD700",
    "#FF6347"
];

document.getElementById('quoteButton').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
    document.body.style.backgroundColor = backgrounds[randomIndex];
});
