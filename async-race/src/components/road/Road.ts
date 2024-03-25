import { deleteCar } from '../../services/api';
import { Car } from '../car/Car';
import { updateCar, updateCars } from '../garageTools/GarageTools';
import { Tag } from '../tag/Tag';
import './Road.scss';

export function disableUpdateForm() {
  const updateForm = document.querySelector('.header__input-update-form');

  if (updateForm instanceof HTMLElement) {
    updateForm.classList.add('disabled');
    updateCar.selectedId = -1;
  }
}

export function resetSelectButtons() {
  const selectButtons = document.querySelectorAll('.select-button');
  selectButtons.forEach((button) => {
    button.classList.remove('green-border');
  });
}

export function selectButtonHandler(event: Event) {
  const { target } = event;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const dataId = target.dataset.id;

  if (dataId) {
    const numberPart: number = parseInt(dataId.split('-')[1], 10);

    updateCar.selectedId = numberPart;

    const updateForm = document.querySelector('.header__input-update-form');

    if (updateForm instanceof HTMLElement) {
      resetSelectButtons();

      if (updateForm.classList.contains('disabled')) {
        updateForm.classList.remove('disabled');
        updateCar.selectedId = numberPart;
        target.classList.add('green-border');
      } else {
        disableUpdateForm();
      }
    }
  }
}

export function removeButtonHandler(event: Event) {
  const { target } = event;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const dataId = target.dataset.id;

  if (dataId) {
    const str = dataId;
    const numberPart: number = parseInt(str.split('-')[1], 10);

    deleteCar(numberPart).then(() => {
      updateCars();
    });
  } else {
    console.error('data-id attribute is missing or invalid');
  }
}

export const Road = {
  createTemplate(name: string, color: string, id: string) {
    const template = `<div class="main__road-tools buttons-container">
  <button class="button big-button select-button" data-id="select-${id}">SELECT</button>
  <button class="button big-button remove-button" data-id="remove-${id}">REMOVE</button>
  <h4 class="main__car-name">${name}</h4>
</div>

<div class="main__road">
  <div class="main__pedals-buttons buttons-container">
    <button class="button button-pedal go-button">GO</button>
    <button class="button button-pedal stop-button">STOP</button>
  </div>

  <div class="main__track">
  ${Car.svg(color, id)}
    <img class="flag" src="./flag2.svg" alt="flag" />
  </div>`;

    return template;
  },

  draw(dataId: string, name: string, color: string) {
    Tag.draw('.main__content', {
      classes: 'main__road-container',
      dataId,
    });

    const parentElement = document.querySelector(`[data-id="${dataId}"]`);

    if (parentElement) {
      parentElement.insertAdjacentHTML('beforeend', Road.createTemplate(name, color, dataId));

      const removeButton = document.querySelector(`[data-id="remove-${dataId}"]`);

      if (removeButton) {
        removeButton.addEventListener('click', removeButtonHandler);
      }
      const selectButton = document.querySelector(`[data-id="select-${dataId}"]`);

      if (selectButton) {
        selectButton.addEventListener('click', selectButtonHandler);
      }
    }
  },
};
