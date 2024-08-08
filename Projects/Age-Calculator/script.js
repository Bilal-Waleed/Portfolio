let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

let date = new Date().getFullYear();

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let getYears = new Date(input.value).getFullYear();

  let years = new Date().getFullYear() - getYears;

  if (input.value === "") {
    alert("Please Write ur Valid Birth-dates");
  } else if (date <= getYears) {
    alert("Please Write Valid Birth-Year");
  } else {
    result.innerHTML = `Your Are ${years} Years Old!`;
  }
});
