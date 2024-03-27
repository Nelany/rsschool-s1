import { GaragePage } from '../../pages/GaragePage';
import { WinnersPage } from '../../pages/WinnersPage';
import { Button } from '../button/Button';
import { carsData } from '../car/carsData';
import './header.scss';

export function winnersButtonHandler() {
  const garageButton = document.querySelector('.garage-button');
  garageButton?.classList.remove('pressed');
  const winnersButton = document.querySelector('.winners-button');
  winnersButton?.classList.add('pressed');

  const nameInput: HTMLElement | null = document.getElementById('createName');
  const colorInput: HTMLElement | null = document.getElementById('createColor');
  if (!(nameInput instanceof HTMLInputElement) || !(colorInput instanceof HTMLInputElement)) {
    return;
  }
  carsData.createName = nameInput.value.trim();
  carsData.createColor = colorInput.value.trim();

  WinnersPage.draw();
}

export function garageButtonHandler() {
  const garageButton = document.querySelector('.garage-button');
  garageButton?.classList.add('pressed');
  const winnersButton = document.querySelector('.winners-button');
  winnersButton?.classList.remove('pressed');
  GaragePage.draw();

  carsData.createName = '';
  carsData.createColor = '#000000';
}

export const Header = {
  template: `<header class="header">
  <div class="header__page-button-container header__container">
  </div>
</header>`,

  draw() {
    const content = document.querySelector('.content');
    if (!(content instanceof HTMLElement)) {
      return;
    }
    content.innerHTML = Header.template;

    Button.draw(
      '.header__page-button-container',
      {
        text: 'TO GARAGE',
        classes: 'big-button garage-button pressed',
        id: '1ddd',
      },
      {
        type: 'click',
        selector: '.garage-button',
        handler: garageButtonHandler,
      }
    );

    Button.draw(
      '.header__page-button-container',
      {
        text: 'TO WINNERS',
        classes: 'button big-button winners-button',
      },
      {
        type: 'click',
        selector: '.winners-button',
        handler: winnersButtonHandler,
      }
    );
  },
};
