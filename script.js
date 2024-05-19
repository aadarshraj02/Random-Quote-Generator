const quoteText = document.querySelector(".quote");
const btn = document.querySelector("button");
const URL = "https://api.quotable.io/random";

btn.addEventListener("click", randomQuote);

function randomQuote() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      quoteText.innerHTML = result.content;
    });
}
