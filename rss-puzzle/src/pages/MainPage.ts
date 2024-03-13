import { Button } from '../components/button/Button';
import { Field } from '../components/field/Field';
import { PageTemplate } from '../components/pageTemplate/PageTemplate';
import { SentenceLine } from '../components/sentenceLine/SentenceLine';
import { checkButtonHandler, continueButtonHandler } from './MainPageService';
import './MainPage.scss';

const drawMainPageTimeout = 1000;

export const MainPage = {
  template: `<div class="content content-fadeout main-content">
  </div>`,

  draw() {
    PageTemplate.draw();

    const contentElement = document.querySelector('.content');

    if (contentElement instanceof HTMLElement) {
      contentElement.classList.add('content-fadeout');
      setTimeout(() => {
        document.body.innerHTML = MainPage.template;
        const content = document.querySelector('.content');
        if (content instanceof HTMLElement) {
          Field.draw(content);
          const field = document.querySelector('.field');
          if (field instanceof HTMLElement) {
            SentenceLine.draw(field);
          }

          const buttonsContainerTemplate = `<div class="buttons-container"></div>`;
          content.insertAdjacentHTML('beforeend', buttonsContainerTemplate);
          const buttonsContainer = document.querySelector('.buttons-container');

          if (buttonsContainer instanceof HTMLElement) {
            Button.draw(
              buttonsContainer,
              { text: 'continue', classes: 'main_button button-continue disabled' },
              { type: 'click', handler: continueButtonHandler, selector: '.button-continue' }
            );
            Button.draw(
              buttonsContainer,
              { text: 'check', classes: 'main_button button-check disabled' },
              { type: 'click', handler: checkButtonHandler, selector: '.button-check' }
            );
          }
        }
      }, drawMainPageTimeout);
    }
  },
};
