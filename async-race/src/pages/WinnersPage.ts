import { sortListener } from '../components/button/Button';
import { Car } from '../components/car/Car';
import { carsData } from '../components/car/carsData';
import { getCar, getWinners } from '../services/api';
import { GetCarDTO, GetWinnerDTO } from '../types/apiTypes';
import './WinnerPage.scss';

function drawRecord(num: number, winner: GetWinnerDTO) {
  const { name } = winner;
  const { wins } = winner;
  const { time } = winner;
  const { color } = winner;
  const id = `${winner.id}`;

  const recordsNumbers = document.querySelector('.records-numbers');
  const recordsCars = document.querySelector('.records-cars');
  const recordsNames = document.querySelector('.records-names');
  const recordsWins = document.querySelector('.records-wins');
  const recordsTime = document.querySelector('.records-time');

  if (recordsNumbers && recordsCars && recordsNames && recordsWins && recordsTime && color && id) {
    const number = `<div class="records-cell record-number">${num}</div>`;
    recordsNumbers.insertAdjacentHTML('beforeend', number);

    const carTemplate = `<div class="records-cell record-car"><div class="records-car-img">${Car.svg(color, id)}</div></div>`;
    recordsCars.insertAdjacentHTML('beforeend', carTemplate);

    const nameTemplate = `<div class="records-cell record-name">${name}</div>`;
    recordsNames.insertAdjacentHTML('beforeend', nameTemplate);

    const winTemplate = `<div class="records-cell record-wins">${wins}</div>`;
    recordsWins.insertAdjacentHTML('beforeend', winTemplate);

    const timeTemplate = `<div class="records-cell record-time">${time}</div>`;
    recordsTime.insertAdjacentHTML('beforeend', timeTemplate);
  }
}

export function updateWinners() {
  let totalWinners = 0;
  getWinners(carsData.numberWinnersPage)
    .then((winners: { winners: GetWinnerDTO[]; total: number }) => {
      totalWinners = winners.total;
      const winnersArray = winners.winners;
      const updatedWinnersArray: GetWinnerDTO[] = [];
      const promises = winnersArray.map((winner) =>
        getCar(winner.id).then((car: GetCarDTO | null) => {
          const updatedWinner = winner;
          if (car) {
            updatedWinner.color = car.color;
            updatedWinner.name = car.name;
            updatedWinnersArray.push(updatedWinner);
          }
          return updatedWinner;
        })
      );
      return Promise.all(promises);
    })
    .then((updatedWinnersArray: GetWinnerDTO[]) => {
      for (let i = 0; i < updatedWinnersArray.length; i += 1) {
        drawRecord(i + 1, updatedWinnersArray[i]);
      }

      carsData.totalWinners = totalWinners;
      const mainCarsNumber = document.querySelector('.main__cars-number');
      if (mainCarsNumber instanceof HTMLElement) {
        mainCarsNumber.textContent = `${totalWinners}`;
      }
      const winnersPageNumber = document.querySelector('.main__page-number');
      if (winnersPageNumber instanceof HTMLElement) {
        carsData.checkNumberWinnersPage();
        winnersPageNumber.textContent = `${carsData.numberWinnersPage}`;
      }
    })
    .catch((error) => {
      console.error('Error updating winners:', error);
    });
}

export function drawRecordsTableTemplate() {
  const template = `<div class="records-table">
  <div class="records-numbers records-column">
    <div class="records-cell record-number-text records-header">Number</div>
  </div>


  <div class="records-cars records-column">
    <div class="records-cell record-car-text records-header">Car</div>
  </div>


  <div class="records-names records-column">
    <div class="records-cell record-name-text records-header">Name</div>
  </div>


  <div class="records-wins records-column">
    <div class="records-cell record-wins-text records-header records-cell-button wins-cell-button">Wins<img class="arrow wins-arrow ${carsData.winsArrowClass}" src="./greenarrow.png" alt=""></div>
  </div>


  <div class="records-time records-column">
    <div class="records-cell record-time-text records-header records-cell-button time-cell-button">Best time (seconds)<img class="arrow time-arrow ${carsData.timeArrowClass}" src="./greenarrow.png" alt=""></div>
  </div>
</div>`;

  return template;
}

export const WinnersPage = {
  draw() {
    carsData.currentPage = 'winners';
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
      mainContent.innerHTML = drawRecordsTableTemplate();
    }

    const tableWins = document.querySelector('.wins-cell-button');
    const tableTime = document.querySelector('.time-cell-button');

    if (tableTime && tableWins) {
      tableWins.addEventListener('click', sortListener);
      tableTime.addEventListener('click', sortListener);
    }

    updateWinners();
  },
};

export function sortTime(timeArrow: HTMLElement, winsArrow: HTMLElement) {
  winsArrow.classList.add('hidden');
  winsArrow.classList.remove('arrow-rotate');
  carsData.winsArrowClass = 'hidden';

  if (timeArrow.classList.contains('hidden')) {
    timeArrow.classList.remove('hidden');
    carsData.sort = 'time';
    carsData.sortOrder = 'ASC';
    carsData.timeArrowClass = '';
    WinnersPage.draw();
  } else if (timeArrow.classList.contains('arrow-rotate')) {
    timeArrow.classList.remove('arrow-rotate');
    timeArrow.classList.add('hidden');
    carsData.sort = 'none';
    carsData.sortOrder = 'none';
    carsData.timeArrowClass = 'hidden';
    WinnersPage.draw();
  } else {
    timeArrow.classList.add('arrow-rotate');
    carsData.sort = 'time';
    carsData.sortOrder = 'DESC';
    carsData.timeArrowClass = 'arrow-rotate';
    WinnersPage.draw();
  }
}

export function sortWins(timeArrow: HTMLElement, winsArrow: HTMLElement) {
  timeArrow.classList.add('hidden');
  timeArrow.classList.remove('arrow-rotate');
  carsData.timeArrowClass = 'hidden';

  if (winsArrow.classList.contains('hidden')) {
    winsArrow.classList.remove('hidden');
    carsData.sort = 'wins';
    carsData.sortOrder = 'ASC';
    carsData.winsArrowClass = '';
    WinnersPage.draw();
  } else if (winsArrow.classList.contains('arrow-rotate')) {
    winsArrow.classList.remove('arrow-rotate');
    winsArrow.classList.add('hidden');
    carsData.sort = 'none';
    carsData.sortOrder = 'none';
    carsData.winsArrowClass = 'hidden';
    WinnersPage.draw();
  } else {
    winsArrow.classList.add('arrow-rotate');
    carsData.sort = 'wins';
    carsData.sortOrder = 'DESC';
    carsData.winsArrowClass = 'arrow-rotate';
    WinnersPage.draw();
  }
}
