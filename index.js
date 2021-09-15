// COUNTER EXAMPLE

const counterText = document.querySelector("#counter");

const minusBtn = document.querySelector("#minus-btn");
const resetBtn = document.querySelector("#reset-btn");
const plusBtn = document.querySelector("#plus-btn");

let count = 0;

function increaseCount() {
  count += 1;

  // console.log("Count is now", count);
  counterText.textContent = count;
}

function decreaseCount() {
  count -= 1;

  counterText.textContent = count;
}

function resetCount() {
  count = 0;

  counterText.textContent = count;
}

plusBtn.addEventListener("click", increaseCount);
minusBtn.addEventListener("click", decreaseCount);
resetBtn.addEventListener("click", resetCount);

// THEME SELECTOR
const themeBtns = document.querySelectorAll(".theme-buttons");

function selectTheme(e) {
  const theme = e.target.textContent;

  document.querySelector("body").className = theme;
  document.querySelector("main").className = theme;

  const allButtons = document.querySelectorAll("button");

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].className = theme;
  }
}

// console.log(themeBtns);
for (let i = 0; i < themeBtns.length; i++) {
  // console.log(themeBtns[i]);
  themeBtns[i].addEventListener("click", selectTheme);
}
