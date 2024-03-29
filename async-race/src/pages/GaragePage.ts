import { carsData } from '../components/car/carsData';
import { GarageTools, updateCars } from '../components/garageTools/GarageTools';
import { Tag } from '../components/tag/Tag';
import './GaragePage.scss';

export const GaragePage = {
  draw() {
    Tag.draw('header', {
      tag: 'div',
      classes: 'header__garage-tools-container',
    });

    GarageTools.draw();

    const mainTittle = document.querySelector('.main__page-tittle');
    if (mainTittle instanceof HTMLElement) {
      mainTittle.innerHTML = `Garage (<span class="main__cars-number"></span>)`;
    }

    const pageNumberName = document.querySelector('.main__page-number-text');
    if (pageNumberName instanceof HTMLElement) {
      pageNumberName.innerHTML = `Page #<span class="main__page-number">${carsData.numberGaragePage}</span>`;
    }

    const mainContent = document.querySelector('.main__content');
    if (mainContent instanceof HTMLElement) {
      mainContent.innerHTML = '';
    }

    updateCars();
  },
};
