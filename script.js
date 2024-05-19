const quoteText = document.querySelector(".quote");
const btn = document.querySelector("button");
const authorName = document.querySelector(".name");
const URL = "https://api.quotable.io/random";

btn.addEventListener("click", randomQuote);

function randomQuote() {
  btn.innerHTML = "Loading...";
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      //   console.log(result);
      quoteText.innerHTML = result.content;
      authorName.innerHTML = result.author;
      btn.innerHTML = "New Quote";
    });
}
