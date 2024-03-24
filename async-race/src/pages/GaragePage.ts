import { GarageTools } from '../components/garageTools/GarageTools';
import { Tag } from '../components/tag/Tag';
import './GaragePage.scss';

const Road = {
  template: `<div class="main__road-tools buttons-container">
  <button class="button big-button select-button">SELECT</button>
  <button class="button big-button remove-button">REMOVE</button>
  <h4 class="main__car-name">Lamborghini</h4>
</div>

<div class="main__road">
  <div class="main__pedals-buttons buttons-container">
    <button class="button button-pedal go-button">GO</button>
    <button class="button button-pedal stop-button">STOP</button>
  </div>

  <div class="main__track">
    <!-- <img class="car" src="./assets/Lamborghini-Silhouette.svg" alt="car" /> -->
    <img draggable="true" class="car" src="./lovelamborghini.svg" alt="car" />
    <img class="flag" src="./flag2.svg" alt="flag" />
  </div>`,

  draw(id: string) {
    Tag.draw('.main__content', {
      classes: 'main__road-container',
      id,
    });

    const parentElement = document.querySelector(`#${id}`);

    if (parentElement) {
      parentElement.insertAdjacentHTML('beforeend', Road.template);
    }
  },
};

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

    const id = 'eeee';
    Road.draw(id);
  },
};
