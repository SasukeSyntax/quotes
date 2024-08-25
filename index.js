const quotes = [
    "The dream is free. The hustle is sold separately.",
    "A man in pain can destroy anything around him..  But he chooses to destroy himself...",
    "The sun and the moon shine at their own time.",
    "Sometimes, people come in your life just to teach you how to let go.",
    "Make them realize that they lost a diamond while playing with worthless stones.",
    "Somewhere, somebody is looking for someone exactly like you.",
    "Kill them with success and bury them with a smile.",
    "Sometimes your heart needs more time to realize something that your mind already knows.",
    "Never give someone the opportunity to waste your time twice.",
    "Life didn't bring you this far just to bring you this far. The most beautiful part of your journey is just beginning.",
    "Be with someone who knows exactly what they have when they are with you.",
    "You will never win if you never begin.",
    "Start where you are. Use what you have. Do what you can.",
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Success is not for the lazy.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream it. Believe it. Build it.",
    "Act as if what you do makes a difference. It does.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Opportunities don't happen. You create them.",
    "Dream bigger, work harder.",
    "If you want something you’ve never had, you must be willing to do something you’ve never done.",
    "Great things never come from comfort zones.",
    "Dream it. Believe it. Build it.",
    "The future depends on what you do today.",
    "Do what you love. Love what you do.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
    "Be so good they can’t ignore you.",
    "Work hard in silence. Let success make the noise.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "The only place where success comes before work is in the dictionary.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Success is not in what you have, but who you are.",
    "The best way to predict the future is to create it.",
    "The only limit to your impact is your imagination and commitment.",
    "The harder the battle, the sweeter the victory.",
    "Opportunities are usually disguised as hard work, so most people don't recognize them.",
    "The key to success is to start before you are ready.",
    "Be patient with yourself. Nothing in nature blooms all year.",
    "Success is a journey, not a destination.",
    "In the middle of difficulty lies opportunity.",
    "Don’t be afraid to give up the good to go for the great.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Success is liking yourself, liking what you do, and liking how you do it.",
    "Don’t let yesterday take up too much of today.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "You don’t have to be great to start, but you have to start to be great.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "You are never too old to set another goal or to dream a new dream.",
    "Start where you are. Use what you have. Do what you can.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The journey of a thousand miles begins with one step.",
    "Don't be discouraged. It's often the last key in the bunch that opens the lock.",
    "Perseverance is not a long race; it is many short races one after the other.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Success is not for the lazy.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream it. Believe it. Build it."
];

// console.log(quotes.length);

const quote = document.getElementById("quote");

newQuote();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function newQuote() {
quote.innerHTML = quotes[getRandomInt(0, quotes.length-1)];
}
document.addEventListener('keyup', (e) => {
    newQuote();
});


