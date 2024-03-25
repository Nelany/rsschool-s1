import { Tag } from '../tag/Tag';
import './Road.scss';

export const Road = {
  createTemplate(name: string) {
    const template = `<div class="main__road-tools buttons-container">
  <button class="button big-button select-button">SELECT</button>
  <button class="button big-button remove-button">REMOVE</button>
  <h4 class="main__car-name">${name}</h4>
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
  </div>`;

    return template;
  },

  draw(dataId: string, name: string) {
    Tag.draw('.main__content', {
      classes: 'main__road-container',
      dataId,
    });

    const parentElement = document.querySelector(`[data-id="${dataId}"]`);

    if (parentElement) {
      parentElement.insertAdjacentHTML('beforeend', Road.createTemplate(name));
    }
  },
};
