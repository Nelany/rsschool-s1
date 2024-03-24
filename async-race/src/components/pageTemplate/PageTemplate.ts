import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Main } from '../main/Main';
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
