import { Button } from '../components/button/Button';
import { ContentTemplate } from '../components/content/Content';
import { navigateTo } from '../services/router';

function backButtonHandler() {
  navigateTo('main');
}

export const About = {
  draw() {
    ContentTemplate.draw();

    Button.draw(
      '.content',
      {
        text: 'Back',
        classes: 'back-button',
      },
      {
        type: 'click',
        selector: '.back-button',
        handler: backButtonHandler,
      }
    );
  },
};
