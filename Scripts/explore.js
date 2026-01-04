
const books = [
  {
    title: "The Night Circus",
    author: "Erin Morgenstern",
    genre: "Fantasy",
    image: "Images/fantasy1.jpg",
    synopsis: "The circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not.",
    series: ["None"],
    ratings: [{ source: "Goodreads", score: "4.0/5" }]
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    image: "Images/fiction1.jpg",
    synopsis: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    series: ["None"],
    ratings: [{ source: "Goodreads", score: "3.9/5" }]
  },
  {
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    image: "Images/mystery1.jpg",
    synopsis: "A study in scarlet and other stories featuring the world's most famous consulting detective.",
    series: ["Sherlock Holmes Series"],
    ratings: [{ source: "Goodreads", score: "4.5/5" }]
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    image: "Images/romance1.jpg",
    synopsis: "The romantic clash between the opinionated Elizabeth Bennet and her proud beau, Mr. Darcy.",
    series: ["None"],
    ratings: [{ source: "Goodreads", score: "4.3/5" }]
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Sci-Fi",
    image: "Images/scifi2.jpg",
    synopsis: "A mythic and emotionally charged hero's journey, Dune tells the story of Paul Atreides.",
    series: ["Dune Chronicles"],
    ratings: [{ source: "Goodreads", score: "4.2/5" }]
  },
  {
    title: "Circe",
    author: "Madeline Miller",
    genre: "Fantasy",
    image: "Images/fantasy2.jpg",
    synopsis: "In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born.",
    series: ["None"],
    ratings: [{ source: "Goodreads", score: "4.3/5" }]
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    image: "Images/fiction3.jpg",
    synopsis: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
    series: ["None"],
    ratings: [{ source: "Goodreads", score: "4.3/5" }]
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "Mystery",
    image: "Images/mystery2.jpg",
    synopsis: "On her fifth wedding anniversary, Nick Dunne's wife Amy disappears.",
    series: ["None"],
    ratings: [{ source: "Goodreads", score: "4.1/5" }]
  },
  {
    title: "The Notebook",
    author: "Nicholas Sparks",
    genre: "Romance",
    image: "Images/romance2.jpg",
    synopsis: "The story of Noah Calhoun and Allie Nelson, two lovers separated by fate.",
    series: ["The Notebook"],
    ratings: [{ source: "Goodreads", score: "4.1/5" }]
  },
  {
    title: "Ender's Game",
    author: "Orson Scott Card",
    genre: "Sci-Fi",
    image: "Images/scifi3.jpg",
    synopsis: "The war with the Buggers has been raging for a hundred years, and the quest for the perfect general has been underway for almost as long.",
    series: ["Ender's Saga"],
    ratings: [{ source: "Goodreads", score: "4.3/5" }]
  }
];



const bookGrid = document.getElementById("bookGrid");
const searchInput = document.getElementById("searchInput");

const modal = document.getElementById("bookModal");
const modalTitle = document.getElementById("modalTitle");
const modalSynopsis = document.getElementById("modalSynopsis");
const modalSeries = document.getElementById("modalSeries");
const modalRatings = document.getElementById("modalRatings");



function displayBooks(bookList) {
  bookGrid.innerHTML = "";

  bookList.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card glass";

    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
    `;

    card.addEventListener("click", () => openModal(book));
    bookGrid.appendChild(card);
  });
}



searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchText) ||
    book.author.toLowerCase().includes(searchText) ||
    book.genre.toLowerCase().includes(searchText)
  );

  displayBooks(filteredBooks);
});



function openModal(book) {
  modalTitle.textContent = book.title;
  modalSynopsis.textContent = book.synopsis;

  
  modalSeries.innerHTML = "";
  book.series.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    modalSeries.appendChild(li);
  });

  modalRatings.innerHTML = "";
  book.ratings.forEach(rating => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${rating.source}</td>
      <td>${rating.score}</td>
    `;
    modalRatings.appendChild(row);
  });

  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}



displayBooks(books);
