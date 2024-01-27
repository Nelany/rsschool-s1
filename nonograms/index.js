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
let currentKey = "inspiration";
let checkedMatrix = levelsMatrixes[currentLevel][currentKey];
let isEndGame = false;

//__________________выбрать случайную картинку из объекта с матрицами______________________________________________

function getRandomKey(matrixes) {
  const keys = Object.keys(matrixes);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}

//_________________________________________________________________________________________________________

//____________________________________createHTML__________________________________________________________
function createHTML() {
  isEndGame = false;
  body.innerHTML = `
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
}

createHTML();

//________________________________shadeCell_____________________________________________

function shadeCell(event, popupMenu, tittle) {
  event.target.classList.toggle("cell-shaded");

  const shadedCells = document.querySelectorAll(".cell-shaded");
  const shadedCorrectCells = document.querySelectorAll(".correct.cell-shaded");
  const correctCells = document.querySelectorAll(".correct");
  console.log(shadedCorrectCells.length);
  console.log(correctCells.length);
  console.log(shadedCells.length);

  if (
    shadedCells.length === shadedCorrectCells.length &&
    shadedCells.length === correctCells.length
  ) {
    tittle.textContent = "Great! You have solved the nonogram in ## seconds!";
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

function applyMatrixToCells(matrix, rowSelector, isAutocomplete) {
  isEndGame = false;
  const rows = document.querySelectorAll(rowSelector);

  for (let i = 0; i < matrix.length; i++) {
    let cells = Array.from(rows[i].querySelectorAll(".cell--picture"));

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        cells[j].classList.add("correct");
        if (isAutocomplete) {
          cells[j].classList.add("cell-shaded");
        }
      }
    }
  }
  resetNumbers();
  updateNumberColumns(checkedMatrix);
  updateNumberRows(checkedMatrix);
}

applyMatrixToCells(checkedMatrix, ".row--picture", false);

//___________________________________resetGame_________________________________________________________

function resetGame(isDeleteCorrect) {
  const cells = document.querySelectorAll(".cell--picture");
  if (isDeleteCorrect) {
    cells.forEach((cell) => {
      cell.classList.remove("cell-shaded", "correct");
    });
  } else {
    cells.forEach((cell) => {
      cell.classList.remove("cell-shaded");
    });
  }
  isEndGame = false;
}

//___________________________________updatePicturesList_________________________________________________________

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

// ______________________________________________________________________________________________________
//___________________________________manageModal_________________________________________________________
// ______________________________________________________________________________________________________

function manageModal(event) {
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
    tittle.textContent = "Themes:";
    popupMenu.innerHTML = `
  <li class="popup__menu-item light-theme">Light theme</li>
  <li class="popup__menu-item medium-theme">Medium theme</li>
  <li class="popup__menu-item dark-theme">Dark theme</li>
  <li class="popup__menu-item menu-button">BACK TO MAIN MENU</li>`;
  }
  if (event.target.closest(".light-theme")) {
    body.classList.add("light");
    body.classList.remove("medium");
    body.classList.remove("dark");
  }
  if (event.target.closest(".medium-theme")) {
    body.classList.add("medium");
    body.classList.remove("light");
    body.classList.remove("dark");
  }
  if (event.target.closest(".dark-theme")) {
    body.classList.add("dark");
    body.classList.remove("medium");
    body.classList.remove("light");
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
    checkedMatrix = levelsMatrixes[currentLevel][currentKey];
    applyMatrixToCells(checkedMatrix, ".row--picture", true);
  }
  if (event.target.closest(".popup__menu-picture")) {
    resetGame(true);

    currentKey = event.target.closest(".popup__menu-picture").textContent;
    checkedMatrix = levelsMatrixes[currentLevel][currentKey];
    applyMatrixToCells(checkedMatrix, ".row--picture", false);

    updatePicturesList(popupMenu);
    popup.classList.remove("open");

  }
  if (event.target.closest(".cell--picture") && !isEndGame) {
    shadeCell(event, popupMenu, tittle);
  }
  if (event.target.closest(".menu-random-picture")) {
    resetGame(true);
    currentKey = getRandomKey(levelsMatrixes[currentLevel]);
    checkedMatrix = levelsMatrixes[currentLevel][currentKey];
    applyMatrixToCells(checkedMatrix, ".row--picture", false);

    updatePicturesList(popupMenu);
    popup.classList.remove("open");
  }
}

body.addEventListener("click", manageModal);

// ____________________________________________________________________________________________

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
