import { Tag } from '../tag/Tag';
import './main.scss';

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
    Tag.draw('.garage-content', {
      classes: 'main__road-container',
      id,
    });

    const parentElement = document.querySelector(`#${id}`);

    if (parentElement) {
      parentElement.insertAdjacentHTML('beforeend', Road.template);
    }
  },
};

export const Main = {
  template: `<main class="main">
  <h2 class="main__page-tittle">Garage (<span class="main__cars-number">6</span>)</h2>
  <h3 class="main__page-number-text">Page #<span class="main__page-number">1</span></h3>

  <div class="main__content garage-content"></div>
</main>`,

  draw() {
    const content = document.querySelector('.content');
    if (!(content instanceof HTMLElement)) {
      return;
    }
    content.insertAdjacentHTML('beforeend', Main.template);
    const id = 'eeee';
    Road.draw(id);
  },
};
