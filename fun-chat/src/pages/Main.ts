import { Button } from '../components/button/Button';
import { ContentTemplate } from '../components/content/Content';
import { navigateTo } from '../services/router';
import { aboutButtonHandler } from './Login';

function logoutButtonHandler() {
  navigateTo('login');
}

export const Main = {
  draw() {
    ContentTemplate.draw();

    Button.draw(
      '.content',
      {
        text: 'About',
        classes: 'about-button',
      },
      {
        type: 'click',
        selector: '.about-button',
        handler: aboutButtonHandler,
      }
    );

    Button.draw(
      '.content',
      {
        text: 'Log out',
        classes: 'logout-button',
      },
      {
        type: 'click',
        selector: '.logout-button',
        handler: logoutButtonHandler,
      }
    );
  },
};
