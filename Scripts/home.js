

const quotes = [
  "A reader lives a thousand lives before he dies.",
  "So many books, so little time.",
  "Reading is dreaming with open eyes.",
  "Books are a uniquely portable magic.",
  "Once you learn to read, you will be forever free."
];

let quoteIndex = 0;
const quoteElement = document.getElementById("quoteText");

function rotateQuote() {
  quoteElement.textContent = quotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quotes.length;
}

setInterval(rotateQuote, 3000);
rotateQuote();



const authors = [
  "George Orwell",
  "J.K. Rowling",
  "Agatha Christie",
  "J.R.R. Tolkien",
  "Jane Austen",
  "Ernest Hemingway"
];


const today = new Date().getDate();
const authorOfDay = authors[today % authors.length];

document.getElementById("authorOfDay").textContent =
  "Author of the Day: " + authorOfDay;

