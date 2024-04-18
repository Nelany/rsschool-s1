import { Button } from '../button/Button';
import { Tag } from '../tag/Tag';
import './Popup.scss';

export const Popup = {
  draw() {
    const template = `<div class="popup close-popup">
        <div class="popup__content">

        </div>
      </div>`;

    const tittleTemplate = `<h5 class="popup__tittle">Hello dear!:*:)</h5>`;
    const content = document.querySelector('.content');
    if (content) {
      content.insertAdjacentHTML('beforeend', template);
    }

    Button.draw(
      '.popup__content',
      {
        text: 'Close',
        classes: 'close-popup-button',
      },
      {
        type: 'click',
        selector: '.close-popup-button',
        handler: Popup.close,
      }
    );

    const popupContent = document.querySelector('.popup__content');
    if (popupContent) {
      popupContent.insertAdjacentHTML('beforeend', tittleTemplate);
    }
    const popupClose = document.querySelector('.close-popup');
    if (popupClose) {
      popupClose.addEventListener('click', Popup.close);
    }
    Tag.draw('.popup__content', {
      tag: 'img',
      classes: 'smile',
      src: './emoticon2.png',
    });
  },

  open(tittle: string) {
    const popup = document.querySelector('.popup');
    const tittleElement = document.querySelector('.popup__tittle');
    if (tittleElement && popup) {
      tittleElement.textContent = tittle;
      popup.classList.add('open');
    }
  },

  close() {
    const popup = document.querySelector('.popup');
    const tittleElement = document.querySelector('.popup__tittle');
    if (tittleElement && popup) {
      popup.classList.remove('open');
      tittleElement.textContent = '';
    }
  },
};
