import { GarageTools } from '../components/garageTools/GarageTools';
import { Road } from '../components/road/Road';
import { Tag } from '../components/tag/Tag';
import { getCars } from '../services/api';
import { GetCarDTO } from '../types/apiTypes';
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
      mainTittle.innerHTML = `Garage (<span class="main__cars-number">6</span>)`;
    }

    const pageNumberName = document.querySelector('.main__page-number-text');
    if (pageNumberName instanceof HTMLElement) {
      pageNumberName.innerHTML = `Page #<span class="main__page-number">1</span>`;
    }

    const mainContent = document.querySelector('.main__content');
    if (mainContent instanceof HTMLElement) {
      mainContent.innerHTML = '';
    }

    getCars().then((cars: GetCarDTO[]) => {
      cars.forEach((car) => {
        Road.draw(`${car.id}`, `${car.name}`, `${car.color}`);
      });
    });
  },
};
