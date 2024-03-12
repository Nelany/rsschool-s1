import { PageTemplate } from '../components/pageTemplate/PageTemplate';
import { Greetings } from '../components/greetings/Greetings';
import { Button } from '../components/button/Button';
import { LogoutString } from '../components/logoutString/LogoutString';

import './StartPage.css';
import { startButtonHandler } from './StartPageService';

export const StartPage = {
  draw() {
    PageTemplate.draw();

    const contentElement = document.querySelector('.content');

    if (contentElement instanceof HTMLElement) {
      Greetings.draw(contentElement);
      Button.draw(
        contentElement,
        { text: 'Start', classes: 'button-start', id: 'startButton', isSubmit: true },
        { type: 'click', handler: startButtonHandler, selector: '.button-start' }
      );
      LogoutString.draw(contentElement);
    }
  },
};
