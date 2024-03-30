import { WinnersPage } from '../../pages/WinnersPage';
import { Button } from '../button/Button';
import { carsData } from '../car/carsData';
import { updateCars } from '../garageTools/GarageTools';
import './footer.scss';

function nextButtonHandler() {
  if (carsData.currentPage === 'garage') {
    carsData.numberGaragePage += 1;
    carsData.checkNumberGaragePage();
    updateCars();
  }
  if (carsData.currentPage === 'winners') {
    carsData.numberWinnersPage += 1;
    carsData.checkNumberWinnersPage();
    WinnersPage.draw();
  }
}

function prevButtonHandler() {
  if (carsData.currentPage === 'garage') {
    carsData.numberGaragePage -= 1;
    carsData.checkNumberGaragePage();
    updateCars();
  }
  if (carsData.currentPage === 'winners') {
    carsData.numberWinnersPage -= 1;
    carsData.checkNumberWinnersPage();
    WinnersPage.draw();
  }
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
