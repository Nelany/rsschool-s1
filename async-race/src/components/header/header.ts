import { Button } from '../button/Button';
import './header.scss';

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

    Button.draw('.header__page-button-container', {
      text: 'TO GARAGE',
      classes: 'button big-button garage-button',
    });

    Button.draw('.header__page-button-container', {
      text: 'TO WINNERS',
      classes: 'button big-button winners-button',
    });
  },
};
