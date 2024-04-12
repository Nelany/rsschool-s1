import { Button } from '../components/button/Button';
import { ContentTemplate } from '../components/content/Content';
import { navigateTo } from '../services/router';
import './About.scss';

function backButtonHandler() {
  navigateTo('main');
}

export const About = {
  template: `<div class="about-message">Welcome to Fun Chat - your place for fun and engaging conversations! Join Fun Chat today and discover a world of interesting conversations and new acquaintances!</div>`,
  draw() {
    ContentTemplate.draw();

    const content = document.querySelector('.content');
    if (!content) {
      return;
    }
    content.insertAdjacentHTML('beforeend', About.template);

    Button.draw(
      '.about-message',
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
