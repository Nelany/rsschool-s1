import { Field } from '../components/field/Field';
import { PageTemplate } from '../components/pageTemplate/PageTemplate';
import { SentenceLine } from '../components/sentenceLine/SentenceLine';

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
          SentenceLine.draw(content);
        }
      }, 1000);
    }
  },
};
