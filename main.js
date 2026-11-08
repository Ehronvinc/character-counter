const textArea = document.querySelector("#paragraph-input");
const counterControl = document.querySelector(".counter-control");
const clearBtn = document.querySelector(".clear-btn");
const upperBtn = document.querySelector(".upper-btn");
const lowerBtn = document.querySelector(".lower-btn");
const charCounting = createCharCounter();
const wordCounting = createWordCounter();

function createCharCounter() {
  const charCountEl = document.createElement("p");

  charCountEl.classList.add("char-counter-text");
  charCountEl.textContent = `Characters: `;

  return charCountEl;
}

function createWordCounter() {
  const wordCountEl = document.createElement("p");

  wordCountEl.classList.add("word-counter-text");
  wordCountEl.textContent = `Words: /200`;

  return wordCountEl;
}

function displayCounters() {
  counterControl.appendChild(charCounting);
  counterControl.appendChild(wordCounting);
}

function checker(char, word) {
  const characCounter = textArea.value.length;
  const wordacCounter =
    textArea.value.trim() === "" ? 0 : textArea.value.split(/\s+/).length;

  warn(wordacCounter);

  char.textContent = `Characters: ${characCounter}`;
  word.textContent = `Words: ${wordacCounter}/200`;
}

function warn(words) {
  const warnMsg = document.getElementById("warning");
  warnMsg.classList.replace("hidden", "warn-msg");

  if (words === 100) {
    warnMsg.textContent = `Warning! 100 words used`;
    textArea.style.outline = "1px solid red";
    setTimeout(() => {
      warnMsg.textContent = "";
      textArea.style.outline = "1px solid #05c105";
    }, 4000);
  }

  if (words === 200) {
    textArea.disabled = true;
    warnMsg.textContent = "Limit Reached!";
    setTimeout(() => {
      warnMsg.textContent = "";
    }, 3000);
  }
}

function focusArea() {
  textArea.style.outline = "1px solid #05c105";
  displayCounters();
}

function blurArea() {
  textArea.style.outline = "none";
}

function clearAll() {
  textArea.value = "";
  textArea.disabled = false;
  checker(charCounting, wordCounting);
}

function upperCase() {
  textArea.value = textArea.value.toUpperCase();
}

function lowerCase() {
  textArea.value = textArea.value.toLowerCase();
}

// Event listeners insertions
textArea.addEventListener("input", () => {
  checker(charCounting, wordCounting);
});
upperBtn.addEventListener("click", upperCase);
lowerBtn.addEventListener("click", lowerCase);
textArea.addEventListener("focus", focusArea);
textArea.addEventListener("blur", blurArea);
clearBtn.addEventListener("click", clearAll);
