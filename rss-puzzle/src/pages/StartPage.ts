import { PageTemplate } from '../components/pageTemplate/PageTemplate';
import { Greetings } from '../components/greetings/Greetings';
import { StartButton } from '../components/startButton/StartButton';
import { LogoutString } from '../components/logoutString/LogoutString';

export const StartPage = {
  draw() {
    PageTemplate.draw();

    const contentElement = document.querySelector('.content');

    if (contentElement instanceof HTMLElement) {
      Greetings.draw(contentElement);
      StartButton.draw(contentElement);
      LogoutString.draw(contentElement);
    }
  },
};
