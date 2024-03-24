import { Main } from '../main/Main';
import { Header } from '../header/Header';
import './PageTemplate.scss';
import { Footer } from '../footer/Footer';

export const PageTemplate = {
  template: `<div class="content"></div>`,

  draw() {
    document.body.innerHTML = PageTemplate.template;
    Header.draw();
    Main.draw();
    Footer.draw();
  },
};
