import { Button } from '../components/button/Button';
import { Field } from '../components/field/Field';
import { PageTemplate } from '../components/pageTemplate/PageTemplate';
import { SentenceLine } from '../components/sentenceLine/SentenceLine';
import { autocompleteButtonHandler, checkButtonHandler, continueButtonHandler, drawSelects } from './MainPageService';
import './MainPage.scss';

const DRAW_MAIN_PAGE_TIMEOUT = 1000;

export const MainPage = {
  template: `<div class="content content-fadeout main-content">
  <div class="main__select-container">
  <label class="level-select-label" for="levelSelect">Level:</label>

  <label class="round-select-label" for="roundSelect">Round:</label>

  </div>
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
          drawSelects();

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
              { text: 'autocomplete', classes: 'main_button button-autocomplete' },
              { type: 'click', handler: autocompleteButtonHandler, selector: '.button-autocomplete' }
            );
            Button.draw(
              buttonsContainer,
              { text: 'continue', classes: 'main_button button-continue disabled hidden' },
              { type: 'click', handler: continueButtonHandler, selector: '.button-continue' }
            );
            Button.draw(
              buttonsContainer,
              { text: 'check', classes: 'main_button button-check disabled' },
              { type: 'click', handler: checkButtonHandler, selector: '.button-check' }
            );
          }
        }
      }, DRAW_MAIN_PAGE_TIMEOUT);
    }
  },
};
