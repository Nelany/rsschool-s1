import { Button } from '../components/button/Button';
import { Field } from '../components/field/Field';
import { PageTemplate } from '../components/pageTemplate/PageTemplate';
import { SentenceLine } from '../components/sentenceLine/SentenceLine';
import {
  autocompleteButtonHandler,
  checkButtonHandler,
  continueButtonHandler,
  drawSelects,
  speakerHandler,
  translateButtonHandler,
} from './MainPageService';
import './MainPage.scss';

const DRAW_MAIN_PAGE_TIMEOUT = 1000;

export const MainPage = {
  template: `<div class="content content-fadeout main-content">
    <div class="main__tools-container">

      <div class="main__select-container">
        <label class="level-select-label" for="levelSelect">Level:</label>

        <label class="round-select-label" for="roundSelect">Round:</label>
      </div>

      <div class="tools-buttons-container"></div>

    </div>

    <div class="main__speaker-container"></div>

    <div class="main__translate-container">
      <span class="main__translate"></span>
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
          Field.draw(content);
          const field = document.querySelector('.field');
          if (field instanceof HTMLElement) {
            SentenceLine.draw(field);
          }
          drawSelects();

          const speakerContainer = document.querySelector('.main__speaker-container');

          if (speakerContainer instanceof HTMLElement) {
            Button.draw(
              speakerContainer,
              {
                text: '<img class="speaker-img" src="./speaker.png" alt="">',
                classes: 'main_button tools-button speaker',
              },
              { type: 'click', handler: speakerHandler, selector: '.speaker' }
            );
          }

          const toolsButtonsContainer = document.querySelector('.tools-buttons-container');

          if (toolsButtonsContainer instanceof HTMLElement) {
            Button.draw(
              toolsButtonsContainer,
              {
                text: '<img class="tools-button-img" src="./text.png" alt="">',
                classes: 'main_button tools-button translate-button button-off',
              },
              { type: 'click', handler: translateButtonHandler, selector: '.translate-button' }
            );
            const translateButton = document.querySelector('.translate-button');
            if (!translateButton) {
              return;
            }
            const restoredIsOffTranslate = localStorage.getItem('isOffTranslate');
            let isOffTranslate = false;
            if (restoredIsOffTranslate) {
              isOffTranslate = JSON.parse(restoredIsOffTranslate);
            }
            if (isOffTranslate) {
              translateButton.classList.add('button-off');

              const translate = document.querySelector('.main__translate');
              if (translate instanceof HTMLElement) {
                translate.classList.remove('appearing');
              }
            } else {
              translateButton.classList.remove('button-off');

              const translate = document.querySelector('.main__translate');
              if (translate instanceof HTMLElement) {
                translate.classList.add('appearing');
              }
            }
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
