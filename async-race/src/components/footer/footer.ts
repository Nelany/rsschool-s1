import { Button } from '../button/Button';
import { carsData } from '../car/carsData';
import { updateCars } from '../garageTools/GarageTools';
import './footer.scss';

function nextButtonHandler() {
  carsData.numberGaragePage += 1;
  carsData.checkNumberGaragePage();
  updateCars();
}

function prevButtonHandler() {
  carsData.numberGaragePage -= 1;
  carsData.checkNumberGaragePage();
  updateCars();
}

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

    Button.draw(
      '.footer__buttons',
      {
        text: 'PREV',
        classes: 'button small-button prev-button',
      },
      {
        type: 'click',
        selector: '.prev-button',
        handler: prevButtonHandler,
      }
    );

    Button.draw(
      '.footer__buttons',
      {
        text: 'NEXT',
        classes: 'button small-button next-button',
      },
      {
        type: 'click',
        selector: '.next-button',
        handler: nextButtonHandler,
      }
    );
  },
};
