// Array of quotes
var quotes = [
    "انما الحياة عقيدة وجهاد . - احمد شوقي ",
    "ومَنْ لَمْ يَذْقْ مُرّ الَتَعلُّمِ سَاعَةً .:. تَجَرّعَ ذُلّ الجَهْلِ طُولَ حَياتِهِ. - الشافعي ",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "( وأن ليس للإنسان إلا ما سعى ) "
];

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    document.getElementById('quote').textContent = randomQuote;
}
