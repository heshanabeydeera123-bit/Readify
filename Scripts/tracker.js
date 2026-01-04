const form = document.getElementById("trackerForm");
const resultBox = document.getElementById("resultBox");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const totalPages = Number(document.getElementById("totalPages").value);
  const pagesRead = Number(document.getElementById("pagesRead").value);
  const pagesPerDay = Number(document.getElementById("pagesPerDay").value);

  if (
    totalPages <= 0 ||
    pagesRead < 0 ||
    pagesPerDay <= 0 ||
    pagesRead > totalPages
  ) {
    alert("Please enter valid values.");
    return;
  }

  const percentage = Math.round((pagesRead / totalPages) * 100);
  const remainingPages = totalPages - pagesRead;
  const daysLeft = Math.ceil(remainingPages / pagesPerDay);

  progressText.textContent =
    `You have completed ${percentage}% of the book. ` +
    `Estimated time to finish: ${daysLeft} day(s).`;

  progressFill.style.width = percentage + "%";
  resultBox.classList.remove("hidden");

 
  const progressData = {
    totalPages,
    pagesRead,
    pagesPerDay,
    percentage
  };

  localStorage.setItem("readingProgress", JSON.stringify(progressData));
});
