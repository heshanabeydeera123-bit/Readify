const books = [
  
  { title: "The Night Circus", author: "Erin Morgenstern", genre: "Fantasy", length: "medium" },
  { title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", length: "long" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", length: "medium" },
  { title: "A Court of Thorns and Roses", author: "Sarah J. Maas", genre: "Fantasy", length: "long" },
  { title: "Coraline", author: "Neil Gaiman", genre: "Fantasy", length: "short" },

 
  { title: "1984", author: "George Orwell", genre: "Dystopian", length: "medium" },
  { title: "The Hunger Games", author: "Suzanne Collins", genre: "Dystopian", length: "medium" },
  { title: "Fahrenheit 451", author: "Ray Bradbury", genre: "Dystopian", length: "short" },
  { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", length: "medium" },
  { title: "The Giver", author: "Lois Lowry", genre: "Dystopian", length: "short" },

  
  { title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", length: "long" },
  { title: "Ender's Game", author: "Orson Scott Card", genre: "Sci-Fi", length: "medium" },
  { title: "The Martian", author: "Andy Weir", genre: "Sci-Fi", length: "medium" },
  { title: "Project Hail Mary", author: "Andy Weir", genre: "Sci-Fi", length: "long" },
  { title: "The Time Machine", author: "H.G. Wells", genre: "Sci-Fi", length: "short" },

 
  { title: "Sherlock Holmes", author: "Arthur Conan Doyle", genre: "Mystery", length: "medium" },
  { title: "Gone Girl", author: "Gillian Flynn", genre: "Mystery", length: "medium" },
  { title: "The Girl on the Train", author: "Paula Hawkins", genre: "Mystery", length: "medium" },
  { title: "And Then There Were None", author: "Agatha Christie", genre: "Mystery", length: "short" },
  { title: "The Da Vinci Code", author: "Dan Brown", genre: "Mystery", length: "long" },

  
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", length: "medium" },
  { title: "The Notebook", author: "Nicholas Sparks", genre: "Romance", length: "short" },
  { title: "Me Before You", author: "Jojo Moyes", genre: "Romance", length: "medium" },
  { title: "Outlander", author: "Diana Gabaldon", genre: "Romance", length: "long" },
  { title: "The Hating Game", author: "Sally Thorne", genre: "Romance", length: "medium" },

  
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", length: "short" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", length: "medium" },
  { title: "The Kite Runner", author: "Khaled Hosseini", genre: "Fiction", length: "medium" },
  { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", length: "short" },
  { title: "Life of Pi", author: "Yann Martel", genre: "Fiction", length: "medium" }
];



const genreSelect = document.getElementById("genreSelect");
const lengthSelect = document.getElementById("lengthSelect");
const pickBtn = document.getElementById("pickBtn");

const resultCard = document.getElementById("resultCard");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookGenre = document.getElementById("bookGenre");
const saveBtn = document.getElementById("saveBtn");



function pickRandomBook() {
  const genre = genreSelect.value;
  const length = lengthSelect.value;

  let filteredBooks = books.filter(book => {
    return (
      (genre === "all" || book.genre === genre) &&
      (length === "all" || book.length === length)
    );
  });

  if (filteredBooks.length === 0) {
    alert("No books match your selection.");
    return;
  }

  const randomBook =
    filteredBooks[Math.floor(Math.random() * filteredBooks.length)];

  bookTitle.textContent = randomBook.title;
  bookAuthor.textContent = "Author: " + randomBook.author;
  bookGenre.textContent = "Genre: " + randomBook.genre;

  resultCard.classList.remove("hidden");

  
  localStorage.setItem(
    "lastRecommendation",
    JSON.stringify(randomBook)
  );

  saveBtn.onclick = () => saveToReadingList(randomBook);
}



function saveToReadingList(book) {
  let readingList =
    JSON.parse(localStorage.getItem("readingList")) || [];

  readingList.push(book);
  localStorage.setItem("readingList", JSON.stringify(readingList));

  alert("Book saved to your reading list!");
}



pickBtn.addEventListener("click", pickRandomBook);
