const beginnerMatrixes = {
  mood: [
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  life: [
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1],
  ],
  beauty: [
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  money: [
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  inspiration: [
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
  ],
};

const intermediateMatrixes = {};
const advancedMatrixes = {};

const levelsMatrixes = {
  beginner: beginnerMatrixes,
  intermediate: intermediateMatrixes,
  advanced: advancedMatrixes,
};

const body = document.querySelector("body");
let popup;
let currentLevel = "beginner";
let currentKey = "mood";
let checkedMatrix = levelsMatrixes[currentLevel][currentKey];
let isEndGame = false;
let timer;
let startTime;
let elapsedTime = 0;
let elapsedSeconds = 0;
let timerRunning = false;
let savedTime = 0;
let currentTheme = "medium";
let audio1;
let audio2;
let audio3;
let audio4;
let audio5;
//__________________выбрать случайную картинку из объекта с матрицами______________________________________________

function getRandomKey(matrixes) {
  const keys = Object.keys(matrixes);
  const randomIndex = Math.floor(Math.random() * keys.length - 1);
  if (keys[randomIndex] === currentKey) {
    getRandomKey(matrixes);
  } else {
    return keys[randomIndex];
  }
}

//_________________________________________________________________________________________________________

//____________________________________createHTML__________________________________________________________
function createHTML() {
  isEndGame = false;
  body.innerHTML = `
      <audio class="audio1" src="./audio1.mp3"></audio>
      <audio class="audio2" src="./audio2.mp3"></audio>
      <audio class="audio3" src="./audio3.mp3"></audio>
      <audio class="audio4" src="./audio4.mp3"></audio>
      <audio class="audio5" src="./audio5.mp3"></audio>
      <div class="content">
        <header class="header">
          <h2 class="button level-button">Level: <span class="level">beginner</span></h2>
          <h2 class="timer">00:00</h2>
          <h2 class="button menu-button">Menu</h2>
        </header>

        <main class="main">
          <div class="numbers-left">
            <div class="sector">
              <div class="row row--number">
                <div class="cell cell--number"></div>
                <div class="cell cell--number"></div>
                <div class="cell cell--number"></div>
              </div>

              <div class="row row--number">
                <div class="cell cell--number"></div>
                <div class="cell cell--number">1</div>
                <div class="cell cell--number">1</div>
              </div>

              <div class="row row--number">
                <div class="cell cell--number"></div>
                <div class="cell cell--number"></div>
                <div class="cell cell--number"></div>
              </div>

              <div class="row row--number">
                <div class="cell cell--number"></div>
                <div class="cell cell--number">1</div>
                <div class="cell cell--number">1</div>
              </div>

              <div class="row row--number">
                <div class="cell cell--number"></div>
                <div class="cell cell--number"></div>
                <div class="cell cell--number">5</div>
              </div>
            </div>
          </div>

          <div class="field-container">
            <div class="numbers-top">
              <div class="sector sector-top">
                <div class="row row-vertical row--number">
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number"></div>
                </div>

                <div class="row row-vertical row--number">
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number"></div>
                </div>

                <div class="row row-vertical row--number">
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number"></div>
                </div>

                <div class="row row-vertical row--number">
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number"></div>
                </div>

                <div class="row row-vertical row--number">
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number"></div>
                </div>
              </div>
            </div>

            <div class="field">
              <div class="square">
                <div class="row row--picture">
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                </div>

                <div class="row row--picture">
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                </div>

                <div class="row row--picture">
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                </div>

                <div class="row row--picture">
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                </div>

                <div class="row row--picture">
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer class="footer">
          <div class="reset button">Reset game</div>
          <div class="autocomplete button">Autocomplete</div>
          <div class="save button">Save game</div>
          <div class="continue button">Continue last game</div>
        </footer>
      </div>

      <div class="popup close-menu">
        <div class="popup__content">
          <div class="popup__header">
            <h2 class="popup__tittle">Menu</h2>
            <div class="popup__close close-menu">X</div>
          </div>

          <ul class="popup__menu">
            <li class="popup__menu-item menu-pictures">Pictures</li>
            <li class="popup__menu-item menu-themes">Themes</li>
          </ul>
        </div>
      </div>`;

  body.classList.add("body", "medium");
  popup = document.querySelector(".popup");
  audio1 = document.querySelector(".audio1");
  audio2 = document.querySelector(".audio2");
  audio3 = document.querySelector(".audio3");
  audio4 = document.querySelector(".audio4");
  audio5 = document.querySelector(".audio5");
}

createHTML();

// ______________________________playAudio________________________________________________________

function playAudio(audio) {
  if (audio.readyState > 1) {
    audio.currentTime = 0;
    audio.play();
  }
}

// ______________________________TIMER________________________________________________________

function padNumber(num) {
  return num < 10 ? "0" + num : num;
}

function updateTimer() {
  const currentTime = Date.now();
  const deltaTime = currentTime - startTime;
  const seconds = Math.floor(deltaTime / 1000);
  const minutes = Math.floor(seconds / 60);

  const formattedTime = padNumber(minutes) + ":" + padNumber(seconds % 60);
  document.querySelector(".timer").textContent = formattedTime;
}

function startTimer() {
  if (!timerRunning) {
    if (savedTime > 0) {
      startTime = Date.now() - elapsedTime - savedTime;
      updateTimer();
      timer = setInterval(updateTimer, 1000);
      timerRunning = true;
      savedTime = 0;
    } else {
      startTime = Date.now() - elapsedTime;
      timer = setInterval(updateTimer, 1000);
      timerRunning = true;
    }
  }
}

function stopTimer() {
  clearInterval(timer);
  elapsedTime = Date.now() - startTime;
  elapsedSeconds = Math.floor(elapsedTime / 1000);
  timerRunning = false;
  document.querySelector(".timer").textContent = "00:00";
  elapsedTime = 0;
}

//________________________________shadeCell_____________________________________________

function shadeCell(event, popupMenu, tittle) {
  playAudio(audio1);
  startTimer();
  event.target.classList.toggle("cell-shaded");
  event.target.classList.remove("crossed-out");

  const shadedCells = document.querySelectorAll(".cell-shaded");
  const shadedCorrectCells = document.querySelectorAll(".correct.cell-shaded");
  const correctCells = document.querySelectorAll(".correct");

  if (
    shadedCells.length === shadedCorrectCells.length &&
    shadedCells.length === correctCells.length
  ) {
    stopTimer();
    playAudio(audio4);
    tittle.textContent = `Great! You have solved the nonogram in ${elapsedSeconds} seconds!`;
    popupMenu.innerHTML = `
    <li class="popup__menu-item menu-record-table">Record table</li>
    <li class="popup__menu-item menu-random-picture">Choose a random picture</li>`;

    popupMenu.innerHTML +=
      '<li class="popup__menu-item menu-button">BACK TO MAIN MENU</li>';

    popup.classList.add("open");
    isEndGame = true;
  }
}

//___________________________________resetNumbers_________________________________________________________

function resetNumbers() {
  const cells = document.querySelectorAll(".cell--number");
  cells.forEach((cell) => {
    cell.textContent = "";
  });
}

//___________________________applyMatrixToCells_____________________________________________________________

function applyMatrixToCells(rowSelector, isAutocomplete) {
  resetGame(true);
  console.log(currentKey);
  checkedMatrix = levelsMatrixes[currentLevel][currentKey];
  stopTimer();
  isEndGame = false;
  const rows = document.querySelectorAll(rowSelector);

  for (let i = 0; i < checkedMatrix.length; i++) {
    let cells = Array.from(rows[i].querySelectorAll(".cell--picture"));

    for (let j = 0; j < checkedMatrix[i].length; j++) {
      if (checkedMatrix[i][j] === 1) {
        cells[j].classList.add("correct");
        if (isAutocomplete) {
          setTimeout(() => {
            cells[j].classList.add("cell-shaded");
            isEndGame = true;
          }, 500 * Math.sqrt(j * i));
        }
      }
    }
  }
  resetNumbers();
  updateNumberColumns(checkedMatrix);
  updateNumberRows(checkedMatrix);
}

applyMatrixToCells(".row--picture", false);

//___________________________________resetGame_________________________________________________________

function resetGame(isDeleteCorrect) {
  stopTimer();
  const cells = document.querySelectorAll(".cell--picture");
  if (isDeleteCorrect) {
    cells.forEach((cell) => {
      cell.classList.remove("cell-shaded", "crossed-out", "correct");
    });
  } else {
    cells.forEach((cell) => {
      cell.classList.remove("cell-shaded", "crossed-out");
    });
  }
  isEndGame = false;
}

//___________________________________updatePicturesList__________________________________
function updatePicturesList(popupMenu) {
  let objMatrixes = levelsMatrixes[currentLevel];
  const keys = Object.keys(objMatrixes);
  popupMenu.innerHTML = keys
    .map((key) => {
      if (key === currentKey) {
        return `<li class="popup__menu-item popup__menu-picture checked ${key}">${key}</li>`;
      }
      return `<li class="popup__menu-item popup__menu-picture ${key}">${key}</li>`;
    })
    .join("");
  popupMenu.innerHTML += `
  <li class="popup__menu-item menu-random-picture">Choose a random picture</li>
  <li class="popup__menu-item menu-button">BACK TO MAIN MENU</li>`;
}

// _______________updateThemesList_________________________________________________

function updateThemesList(tittle, popupMenu) {
  tittle.textContent = "Themes:";
  popupMenu.innerHTML = `
  <li class="popup__menu-item theme light-theme">Light theme</li>
  <li class="popup__menu-item theme medium-theme">Medium theme</li>
  <li class="popup__menu-item theme dark-theme">Dark theme</li>
  <li class="popup__menu-item menu-button">BACK TO MAIN MENU</li>`;
  const themes = document.querySelectorAll(".theme");
  themes.forEach((theme) => {
    if (theme.classList.contains(currentTheme + "-theme")) {
      theme.classList.add("checked");
    } else {
      theme.classList.remove("checked");
    }
  });
}

// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
//___________________________________manageClick_________________________________________________________
// ______________________________________________________________________________________________________

function manageClick(event) {
  console.log(event.target);
  const tittle = document.querySelector(".popup__tittle");
  const popupMenu = document.querySelector(".popup__menu");
  const levelOnScreen = document.querySelector(".level");

  if (event.target.closest(".menu-button")) {
    tittle.textContent = "Menu";
    popupMenu.innerHTML = `
  <li class="popup__menu-item menu-pictures">Picture</li>
  <li class="popup__menu-item menu-themes">Theme</li>`;

    popup.classList.add("open");
  }
  if (event.target.classList.contains("close-menu")) {
    popup.classList.remove("open");
  }
  if (event.target.closest(".menu-pictures")) {
    tittle.textContent = "Pictures:";

    updatePicturesList(popupMenu);
  }
  if (event.target.closest(".menu-themes")) {
    updateThemesList(tittle, popupMenu);
  }
  if (event.target.closest(".light-theme")) {
    body.classList.add("light");
    body.classList.remove("medium");
    body.classList.remove("dark");
    currentTheme = "light";
    updateThemesList(tittle, popupMenu);
  }
  if (event.target.closest(".medium-theme")) {
    body.classList.add("medium");
    body.classList.remove("light");
    body.classList.remove("dark");
    currentTheme = "medium";
    updateThemesList(tittle, popupMenu);
  }
  if (event.target.closest(".dark-theme")) {
    body.classList.add("dark");
    body.classList.remove("medium");
    body.classList.remove("light");
    currentTheme = "dark";
    updateThemesList(tittle, popupMenu);
  }
  if (event.target.closest(".level-button")) {
    tittle.textContent = "Levels:";
    popupMenu.innerHTML = `
<li class="popup__menu-item level-beginner">Beginner</li>
<li class="popup__menu-item level-intermediate">Intermediate</li>
<li class="popup__menu-item level-advanced">Advanced</li>`;

    popup.classList.add("open");
  }
  if (event.target.closest(".level-beginner")) {
    levelOnScreen.textContent = "beginner";
    currentLevel = "beginner";
  }
  // if (event.target.closest(".level-intermediate")) {
  //   levelOnScreen.textContent = "intermediate";
  //   currentLevel = "intermediate";
  // }
  // if (event.target.closest(".level-advanced")) {
  //   levelOnScreen.textContent = "advanced";
  //   currentLevel = "advanced";
  // }
  if (event.target.closest(".reset")) {
    resetGame(false);
  }
  if (event.target.closest(".autocomplete")) {
    resetGame(false);
    applyMatrixToCells(".row--picture", true);
  }
  if (event.target.closest(".popup__menu-picture")) {
    currentKey = event.target.closest(".popup__menu-picture").textContent;
    applyMatrixToCells(".row--picture", false);

    updatePicturesList(popupMenu);
    popup.classList.remove("open");
  }
  if (event.target.closest(".cell--picture") && !isEndGame) {
    shadeCell(event, popupMenu, tittle);
  }
  if (event.target.closest(".menu-random-picture")) {
    currentKey = getRandomKey(levelsMatrixes[currentLevel]);
    console.log(currentKey + "WWWW");
    applyMatrixToCells(".row--picture", false);

    updatePicturesList(popupMenu);
    popup.classList.remove("open");
  }
  if (event.target.closest(".save") && timerRunning) {
    playAudio(audio5);
    saveToLocalStorage();
    event.target.textContent = "Done!";
    setTimeout(function () {
      event.target.textContent = "Save Game";
    }, 2000);
  }
  if (event.target.closest(".continue")) {
    loadFromLocalStorage();
    applyMatrixToCells(".row--picture", false);
    loadFromLocalStorage();
    timerRunning = false;
    startTimer();
  }
  if (
    event.target.closest(".button") ||
    event.target.closest(".popup__menu-item") ||
    event.target.closest(".close-menu")
  ) {
    playAudio(audio3);
  }
}

body.addEventListener("click", manageClick);

// ____________________________________________________________________________________________
// ____________________________________________________________________________________________

// ________________________manageRightClick__________________________________________________

function manageRightClick(event) {
  event.preventDefault();
  if (
    event.target.closest(".cell--picture") &&
    !event.target.closest(".cell-shaded")
  ) {
    playAudio(audio2);
    event.target.classList.toggle("crossed-out");
  }
}

body.addEventListener("contextmenu", manageRightClick);

// _________функции для подсчета и заполнения цифр-подсказок:______________________________________

// _________1. создать массив с количеством единиц в ряду матрицы______________________________________

function countRowCells(matrixKey) {
  const matrix = matrixKey;

  const consecutiveCounts = [];

  for (let i = 0; i < matrix.length; i++) {
    let count = 0;
    const rowCounts = [];

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        count++;
      } else {
        if (count > 0) {
          rowCounts.push(count);
          count = 0;
        }
      }
    }

    if (count > 0) {
      rowCounts.push(count);
    }

    consecutiveCounts.push(rowCounts);
  }

  return consecutiveCounts;
}

// _________2. заполнить цифрами ряды на странице______________________________________

function updateNumberRows(matrixKey) {
  const counts = countRowCells(matrixKey);

  const numbersContainer = document.querySelector(".numbers-left .sector");

  counts.forEach((rowCounts, rowIndex) => {
    const rowElement = numbersContainer.querySelector(
      `.row--number:nth-child(${rowIndex + 1})`
    );

    if (rowElement) {
      const cellElements = rowElement.querySelectorAll(".cell--number");
      reverseRowCounts = rowCounts.reverse();
      reverseRowCounts.forEach((count, countIndex) => {
        const cellElement = cellElements[cellElements.length - countIndex - 1];

        if (cellElement) {
          cellElement.textContent = count;
        }
      });
    }
  });
}

// _________3. создать массив с количеством единиц в столбце матрицы______________________________________

function countColumnCells(matrixKey) {
  const matrix = matrixKey;

  const consecutiveCountsInColumns = [];

  for (let i = 0; i < matrix[0].length; i++) {
    consecutiveCountsInColumns.push([]);
  }

  for (let j = 0; j < matrix[0].length; j++) {
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 1) {
        count++;
      } else {
        if (count > 0) {
          consecutiveCountsInColumns[j].push(count);
          count = 0;
        }
      }
    }

    if (count > 0) {
      consecutiveCountsInColumns[j].push(count);
    }
  }

  return consecutiveCountsInColumns;
}

// _________4. заполнить цифрами столбцы на странице______________________________________

function updateNumberColumns(matrixKey) {
  const countsInColumns = countColumnCells(matrixKey);

  const numbersContainer = document.querySelector(".numbers-top .sector-top");

  countsInColumns.forEach((columnCounts, columnIndex) => {
    const columnElement = numbersContainer.querySelector(
      `.row--number:nth-child(${columnIndex + 1})`
    );

    if (columnElement) {
      const cellElements = columnElement.querySelectorAll(".cell--number");
      reverseColumnCounts = columnCounts.reverse();
      reverseColumnCounts.forEach((count, countIndex) => {
        const cellElement = cellElements[cellElements.length - countIndex - 1];

        if (cellElement) {
          cellElement.textContent = count;
        }
      });
    }
  });
}
// ____________________________________________________________________________________________

// ___________________________saveToLocalStorage__________________________________________________

function saveToLocalStorage() {
  localStorage.setItem("currentLevel", currentLevel);
  localStorage.setItem("currentKey", currentKey);
  localStorage.setItem("isEndGame", isEndGame.toString());
  // localStorage.setItem("timerRunning", timerRunning.toString());
  localStorage.setItem("savedTime", (Date.now() - startTime).toString());
  localStorage.setItem("currentTheme", currentTheme);

  saveCellClasses();
}

// ___________________________loadFromLocalStorage__________________________________________________

function loadFromLocalStorage() {
  currentLevel = localStorage.getItem("currentLevel") || currentLevel;
  currentKey = localStorage.getItem("currentKey") || currentKey;
  isEndGame = JSON.parse(localStorage.getItem("isEndGame")) ?? false;
  // timerRunning = JSON.parse(localStorage.getItem("timerRunning")) ?? false;
  savedTime = parseInt(localStorage.getItem("savedTime"), 10) || 0;
  currentTheme = localStorage.getItem("currentTheme") || currentLevel;

  body.classList.remove("light");
  body.classList.remove("medium");
  body.classList.remove("dark");
  body.classList.add(currentTheme);

  restoreCellClasses();
}

// ___________________________saveCellClasses to LocalStorage_______________________________________

function saveCellClasses() {
  const cells = document.querySelectorAll(".cell--picture");
  const cellClasses = Array.from(cells).map((cell) => cell.className);
  localStorage.setItem("cellClasses", JSON.stringify(cellClasses));
}

// ___________________________restoreCellClasses from LocalStorage_______________________________________

function restoreCellClasses() {
  timerRunning = false;
  const storedCellClasses = localStorage.getItem("cellClasses");

  if (storedCellClasses) {
    const cellClasses = JSON.parse(storedCellClasses);
    const cells = document.querySelectorAll(".cell--picture");

    cells.forEach((cell, index) => {
      cell.className = cellClasses[index];
    });
  }
}
