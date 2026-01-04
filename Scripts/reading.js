

const soundBtn = document.getElementById("soundBtn");
const ambientSound = document.getElementById("ambientSound");

let isPlaying = false;

soundBtn.addEventListener("click", () => {
  if (!isPlaying) {
    ambientSound.play()
      .then(() => {
        soundBtn.textContent = "Pause Sound";
        isPlaying = true;
      })
      .catch(error => {
        console.error("Audio playback failed:", error);
        alert("Could not play sound. Please check your internet connection or browser settings.");
      });
  } else {
    ambientSound.pause();
    soundBtn.textContent = "Play Sound";
    isPlaying = false;
  }
});



const form = document.getElementById("completedForm");
const input = document.getElementById("bookName");
const list = document.getElementById("completedList");

let completedBooks =
  JSON.parse(localStorage.getItem("completedBooks")) || [];


function renderList() {
  list.innerHTML = "";
  completedBooks.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book;
    list.appendChild(li);
  });
}

renderList();

form.addEventListener("submit", e => {
  e.preventDefault();

  const book = input.value.trim();
  if (book === "") return;

  completedBooks.push(book);
  localStorage.setItem("completedBooks", JSON.stringify(completedBooks));

  input.value = "";
  renderList();
});
