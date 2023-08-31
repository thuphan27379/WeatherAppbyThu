// declare variables, select elements
const value = document.querySelector("#value"); // con số
const btnDecrease = document.querySelector(".btn-decrease"); // button decrease
const btnIncrease = document.querySelector(".btn-increase"); // button increase
const btnReset = document.querySelector(".btn-reset"); // button reset
let count = 0;

function updateValue() {
  // console.log(count);
  value.textContent = count; //thay doi gia tri

  if (count > 0) {
    //change color
    value.style.color = "green";
  }
  if (count < 0) {
    value.style.color = "red";
  }
  if (count === 0) {
    value.style.color = "black";
  }
}

btnDecrease.addEventListener("click", () => {
  //add event click
  count--;
  updateValue();
  if (count % 2 === 0) {
    value.style.color = "red";
  } else {
    value.style.color = "yellow";
  }
});
btnIncrease.addEventListener("click", () => {
  count++;
  updateValue();
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  value.style.color = "#" + randomColor;
});
btnReset.addEventListener("click", () => {
  count = 0;
  updateValue();
});
