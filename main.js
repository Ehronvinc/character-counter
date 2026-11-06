const textArea = document.querySelector("#paragraph-input");
const counterControl = document.querySelector(".counter-control");
const clearBtn = document.querySelector(".clear-btn");
const upperBtn = document.querySelector(".upper-btn");
const lowerBtn = document.querySelector(".lower-btn");

function createCharCounter() {
  const charCountEl = document.createElement("p");
  const wordCounting = createWordCounter();

  charCountEl.classList.add("char-counter-text");
  charCountEl.textContent = `Characters: `;

  counterControl.appendChild(charCountEl);
  counterControl.appendChild(wordCounting);
  checker(charCountEl, wordCounting);
}

function createWordCounter() {
  const wordCountEl = document.createElement("p");

  wordCountEl.classList.add("word-counter-text");
  wordCountEl.textContent = `Words: /200`;

  return wordCountEl;
}

function checker(char, word) {
  textArea.addEventListener("input", () => {
    const characCounter = textArea.value.length;
    const wordacCounter =
      textArea.value.trim() === "" ? 0 : textArea.value.split(/\s+/).length;
    warn(wordacCounter);
    clearAll(char, word);

    char.textContent = `Characters: ${characCounter}`;
    word.textContent = `Words: ${wordacCounter}/200`;
  });
}

function warn(words) {
  const warnMsg = document.getElementById("warning");
  warnMsg.classList.replace("hidden", "warn-msg");
  if (words === 100) {
    warnMsg.textContent = `Warning! 100 words left`;
    textArea.style.outline = "1px solid red";
    setTimeout(() => {
      warnMsg.textContent = "";
      textArea.style.outline = "1px solid #05c105";
    }, 4000);
  }
  if (words > 200) {
    textArea.disabled = true;
    warnMsg.textContent = "Limit Reached!";
    setTimeout(() => {
      warnMsg.textContent = "";
    }, 4000);
  }
}

function focusArea() {
  textArea.style.outline = "1px solid #05c105";
}

function blurArea() {
  textArea.style.outline = "none";
}

function clearAll(chars, words) {
  clearBtn.addEventListener("click", () => {
    textArea.value = "";
    textArea.disabled = false;
    chars.textContent = `Characters: 0`;
    words.textContent = `Words: 0/200`;
  });
}

function upperCase() {
  upperBtn.addEventListener("click", () => {
    textArea.value = textArea.value.toUpperCase();
  });
}

function lowerCase() {
  lowerBtn.addEventListener("click", () => {
    textArea.value = textArea.value.toLowerCase();
  });
}

createCharCounter();
upperCase();
lowerCase();
textArea.addEventListener("focus", focusArea);
textArea.addEventListener("blur", blurArea);
