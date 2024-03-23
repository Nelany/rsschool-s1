import { headerTemplate } from '../header/header';
import './PageTemplate.scss';

export const PageTemplate = {
  template: `<div class="content">

  <main class="main">
        <h2 class="main__page-tittle">Garage (<span class="main__cars-number">6</span>)</h2>
        <h3 class="main__page-number-text">Page #<span class="main__page-number">1</span></h3>

        <div class="main__container">
        </div>
  </main>

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
  },
};
