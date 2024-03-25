import './WinnerPage.scss';

function drawRecords() {
  const template = `<div class="records-table">
  <div class="records-numbers records-column">
    <div class="records-cell record-number-text records-header">Number</div>
    <div class="records-cell record-number">1</div>
    <div class="records-cell record-number">2</div>
    <div class="records-cell record-number">3</div>
  </div>

  <div class="records-cars records-column">
    <div class="records-cell record-car-text records-header">Car</div>
    <div class="records-cell record-car">
      <img class="car records-car-img" src="./lovelamborghini.svg" alt="car" />
    </div>
    <div class="records-cell record-car">
      <img class="car records-car-img" src="./lovelamborghini.svg" alt="car" />
    </div>
    <div class="records-cell record-car">
      <img class="car records-car-img" src="./lovelamborghini.svg" alt="car" />
    </div>
  </div>

  <div class="records-names records-column">
    <div class="records-cell record-name-text records-header">Name</div>
    <div class="records-cell record-name">Lamborghini</div>
    <div class="records-cell record-name">Aston Martin</div>
    <div class="records-cell record-name">Alfa Romeo</div>
  </div>

  <div class="records-wins records-column">
    <div class="records-cell record-wins-text records-header">Wins</div>
    <div class="records-cell record-wins">5</div>
    <div class="records-cell record-wins">2</div>
    <div class="records-cell record-wins">10</div>
  </div>

  <div class="records-time records-column">
    <div class="records-cell record-time-text records-header">Best time (seconds)</div>
    <div class="records-cell record-time">2.5</div>
    <div class="records-cell record-time">3.2</div>
    <div class="records-cell record-time">3.35</div>
  </div>
</div>`;

  return template;
}

export const WinnersPage = {
  draw() {
    const garageTools = document.querySelector('.header__garage-tools-container');
    if (garageTools) {
      garageTools.remove();
    }

    const mainTittle = document.querySelector('.main__page-tittle');
    if (mainTittle instanceof HTMLElement) {
      mainTittle.innerHTML = `Winners (<span class="main__cars-number">3</span>)`;
    }

    const pageNumberName = document.querySelector('.main__page-number-text');
    if (pageNumberName instanceof HTMLElement) {
      pageNumberName.innerHTML = `Page #<span class="main__page-number">1</span>`;
    }

    const mainContent = document.querySelector('.main__content');
    if (mainContent instanceof HTMLElement) {
      mainContent.innerHTML = drawRecords();
    }
  },
};
