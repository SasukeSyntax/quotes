const quotes = [
    "The dream is free. The hustle is sold seperately.",
    "The sun and the moon shine at their own time.",
    "Sometimes, people come in your life just to teach you how to let go.",
    "Make them realise that they lost a diamond while playing with worthless stones.",
    "Somewhere, somebody is looking for someone exactly like you.",
    "Kill them with success and bury them with a smile.",
    "Sometimes your heart needs more time to realise something that your mind already knows.",
    "Never give someone the oppurtunity to waste your time twice.",
    "Life didn't bring you this far just to bring you this far. The most beautiful part of your journey is just beginning.",
    "Be with someone who knows exactly what they have when they are with you."
];
const quote = document.getElementById("quote");

newQuote();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function newQuote() {
quote.innerHTML = '<span>"</span>' + quotes[getRandomInt(0, quotes.length-1)] + '<span>"</span>';
}
document.addEventListener('keyup', (e) => {
    newQuote();
    console.log(e)
});