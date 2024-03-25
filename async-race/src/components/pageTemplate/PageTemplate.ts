import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Main } from '../main/main';
import './PageTemplate.scss';

export const PageTemplate = {
  template: `<div class="content"></div>`,

  draw() {
    document.body.innerHTML = PageTemplate.template;
    Header.draw();
    Main.draw();
    Footer.draw();
  },
};
