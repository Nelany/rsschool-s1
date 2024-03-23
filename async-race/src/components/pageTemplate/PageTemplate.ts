import { mainTemplate } from '../main/main';
import { headerTemplate } from '../header/header';
import './PageTemplate.scss';
import { footerTemplate } from '../footer/footer';

export const PageTemplate = {
  template: `<div class="content"></div>`,

  draw() {
    document.body.innerHTML = PageTemplate.template;
    headerTemplate.draw();
    mainTemplate.draw();
    footerTemplate.draw();
  },
};
