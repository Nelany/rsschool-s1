import { GaragePage } from '../../pages/GaragePage';
import { WinnersPage } from '../../pages/WinnersPage';
import { Button } from '../button/Button';
import './header.scss';

export function winnersButtonHandler() {
  WinnersPage.draw();
}

export function garageButtonHandler() {
  GaragePage.draw();
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
        classes: 'big-button garage-button',
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
