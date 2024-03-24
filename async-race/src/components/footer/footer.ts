import { Button } from '../button/Button';
import './footer.scss';

export const Footer = {
  template: `<footer class="footer">
  <div class="footer__buttons buttons-container"></div>
</footer>`,

  draw() {
    const content = document.querySelector('.content');
    if (!(content instanceof HTMLElement)) {
      return;
    }
    content.insertAdjacentHTML('beforeend', Footer.template);

    Button.draw('.footer__buttons', {
      text: 'PREV',
      classes: 'button small-button prev-button',
    });

    Button.draw('.footer__buttons', {
      text: 'NEXT',
      classes: 'button small-button next-button',
    });
  },
};
