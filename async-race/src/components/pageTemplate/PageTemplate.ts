import { mainTemplate } from '../main/main';
import { headerTemplate } from '../header/header';
import './PageTemplate.scss';

export const PageTemplate = {
  template: `<div class="content">

  <footer class="footer">
        <div class="footer__buttons buttons-container">
          <button class="button small-button prev-button">PREV</button>
          <button class="button small-button next-button">NEXT</button>
        </div>
      </footer>
</div>`,

  draw() {
    document.body.innerHTML = PageTemplate.template;
    headerTemplate.draw();
    mainTemplate.draw();
  },
};
