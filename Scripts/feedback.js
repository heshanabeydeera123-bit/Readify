
const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  const feedbackData = {
    name,
    email,
    message,
    date: new Date().toLocaleString()
  };

  localStorage.setItem("feedback", JSON.stringify(feedbackData));

  alert("Thank you for your feedback!");
  form.reset();
});



const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});
