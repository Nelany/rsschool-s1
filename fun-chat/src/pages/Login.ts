import { Button } from '../components/button/Button';
import { ContentTemplate } from '../components/content/Content';
import { navigateTo } from '../services/router';

function loginButtonHandler() {
  navigateTo('main');
}

export function aboutButtonHandler() {
  navigateTo('about');
}

export const Login = {
  draw() {
    ContentTemplate.draw();

    Button.draw(
      '.content',
      {
        text: 'Login',
        classes: 'login-button',
      },
      {
        type: 'click',
        selector: '.login-button',
        handler: loginButtonHandler,
      }
    );

    Button.draw(
      '.content',
      {
        text: 'About us',
        classes: 'about-button',
      },
      {
        type: 'click',
        selector: '.about-button',
        handler: aboutButtonHandler,
      }
    );
  },
};
