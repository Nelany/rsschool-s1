const body = document.querySelector("body");
let popup;

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

function createHTML() {
  body.innerHTML = `
      <div class="content">
        <header class="header">
          <h2 class="button level-button">Level: <span>beginner</span></h2>
          <h2 class="timer">00:00</h2>
          <h2 class="button menu-button">Menu</h2>
        </header>

        <main class="main">
          <div class="numbers-left">
            <div class="sector">
              <div class="row">
                <div class="cell cell--number"></div>
                <div class="cell cell--number"></div>
                <div class="cell cell--number"></div>
              </div>

              <div class="row">
                <div class="cell cell--number"></div>
                <div class="cell cell--number">1</div>
                <div class="cell cell--number">1</div>
              </div>

              <div class="row">
                <div class="cell cell--number"></div>
                <div class="cell cell--number"></div>
                <div class="cell cell--number"></div>
              </div>

              <div class="row">
                <div class="cell cell--number"></div>
                <div class="cell cell--number">1</div>
                <div class="cell cell--number">1</div>
              </div>

              <div class="row">
                <div class="cell cell--number"></div>
                <div class="cell cell--number"></div>
                <div class="cell cell--number">5</div>
              </div>
            </div>
          </div>

          <div class="field-container">
            <div class="numbers-top">
              <div class="sector">
                <div class="row">
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number"></div>
                </div>

                <div class="row">
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number">1</div>
                  <div class="cell cell--number"></div>
                  <div class="cell cell--number">1</div>
                  <div class="cell cell--number"></div>
                </div>

                <div class="row">
                  <div class="cell cell--number">2</div>
                  <div class="cell cell--number">1</div>
                  <div class="cell cell--number">1</div>
                  <div class="cell cell--number">1</div>
                  <div class="cell cell--number">2</div>
                </div>
              </div>
            </div>

            <div class="field">
              <div class="square">
                <div class="row">
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                </div>

                <div class="row">
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture cell-shaded"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture cell-shaded"></div>
                  <div class="cell cell--picture"></div>
                </div>

                <div class="row">
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                </div>

                <div class="row">
                  <div class="cell cell--picture cell-shaded"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture"></div>
                  <div class="cell cell--picture cell-shaded"></div>
                </div>

                <div class="row">
                  <div class="cell cell--picture cell-shaded"></div>
                  <div class="cell cell--picture cell-shaded"></div>
                  <div class="cell cell--picture cell-shaded"></div>
                  <div class="cell cell--picture cell-shaded"></div>
                  <div class="cell cell--picture cell-shaded"></div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer class="footer">
          <div class="reset button">Reset game</div>
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

function shadeCell(event) {
  console.log(event.target);
  if (event.target.classList.contains("cell--picture")) {
    event.target.classList.toggle("cell-shaded");
  }
}

body.addEventListener("click", shadeCell);

function manageModal(event) {
  const tittle = document.querySelector(".popup__tittle");
  const popupMenu = document.querySelector(".popup__menu");

  if (event.target.closest(".menu-button")) {
    tittle.textContent = "Menu";
    popupMenu.innerHTML = `
  <li class="popup__menu-item menu-pictures">New Picture</li>
  <li class="popup__menu-item menu-themes">New Theme</li>`;

    popup.classList.add("open");
  }
  if (event.target.classList.contains("close-menu")) {
    popup.classList.remove("open");
  }
  if (event.target.closest(".menu-pictures")) {
    tittle.textContent = "Pictures:";
    popupMenu.innerHTML = `
  <li class="popup__menu-item picture1">Picture 1</li>
  <li class="popup__menu-item picture2">Picture 2</li>
  <li class="popup__menu-item picture1">Picture 3</li>
  <li class="popup__menu-item picture1">Picture 4</li>
  <li class="popup__menu-item picture1">Picture 5</li>
  <li class="popup__menu-item menu-button">Back to main MENU</li>`;
  }
  if (event.target.closest(".menu-themes")) {
    tittle.textContent = "Themes:";
    popupMenu.innerHTML = `
  <li class="popup__menu-item light-theme">Light theme</li>
  <li class="popup__menu-item medium-theme">Medium theme</li>
  <li class="popup__menu-item dark-theme">Dark theme</li>
  <li class="popup__menu-item menu-button">Back to main MENU</li>`;
  }
  if (event.target.closest(".light-theme")) {
      body.classList.add('light');
      body.classList.remove('medium');
      body.classList.remove('dark');
  }
  if (event.target.closest(".medium-theme")) {
    body.classList.add('medium');
    body.classList.remove('light');
    body.classList.remove('dark');
}
if (event.target.closest(".dark-theme")) {
  body.classList.add('dark');
  body.classList.remove('medium');
  body.classList.remove('light');
}
}

body.addEventListener("click", manageModal);
