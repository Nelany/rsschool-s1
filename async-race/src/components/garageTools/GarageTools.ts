import { createCar, getCars } from '../../services/api';
import { CreateCarDTO, GetCarDTO } from '../../types/apiTypes';
import { Button } from '../button/Button';
import { Road } from '../road/Road';
import { Tag } from '../tag/Tag';

export const updateCar = {
  selectedId: -1,

  updateSelectedCar() {},
};

export function updateCars() {
  const mainContent = document.querySelector('.main__content');
  if (mainContent instanceof HTMLElement) {
    mainContent.innerHTML = '';

    getCars().then((cars: GetCarDTO[]) => {
      cars.forEach((car) => {
        Road.draw(`${car.id}`, `${car.name}`, `${car.color}`);
      });
    });
  }
}

export function createButtonHandler() {
  const nameInput = document.getElementById('createName') as HTMLInputElement;
  const colorInput = document.getElementById('createColor') as HTMLInputElement;

  if (nameInput.value === '') {
    nameInput.classList.add('red-border');
    setTimeout(() => {
      nameInput.classList.remove('red-border');
    }, 2000);
    return;
  }

  const formData: CreateCarDTO = {
    name: nameInput.value.trim(),
    color: colorInput.value.trim(),
  };

  createCar(formData)
    .then(() => {
      updateCars();

      nameInput.value = '';
      colorInput.value = '';
    })
    .catch((error) => {
      console.error('Error creating car:', error);
    });
}

function createCreateForm() {
  Tag.draw('.header__garage-tools-container', {
    tag: 'div',
    classes: 'header__input-create-form header__container',
  });

  Tag.draw('.header__input-create-form', {
    tag: 'input',
    classes: 'input input-text input-text-create',
    id: 'createName',
    type: 'text',
    required: true,
  });

  Tag.draw('.header__input-create-form', {
    tag: 'input',
    classes: 'input input-color input-color-create',
    id: 'createColor',
    type: 'color',
    required: true,
  });

  Button.draw(
    '.header__input-create-form',
    {
      text: 'Create',
      classes: 'small-button button-create',
    },
    {
      type: 'click',
      selector: '.button-create',
      handler: createButtonHandler,
    }
  );
}

function createUpdateForm() {
  Tag.draw('.header__garage-tools-container', {
    tag: 'div',
    classes: 'header__input-update-form header__container disabled',
  });

  Tag.draw('.header__input-update-form', {
    tag: 'input',
    classes: 'input input-text input-text-update',
    id: 'updateName',
    type: 'text',
    required: true,
  });

  Tag.draw('.header__input-update-form', {
    tag: 'input',
    classes: 'input input-color input-color-update',
    id: 'updateColor',
    type: 'color',
    required: true,
  });

  Button.draw('.header__input-update-form', {
    text: 'Update',
    classes: 'small-button button-update',
  });
}

function createToolsButtons() {
  Tag.draw('.header__garage-tools-container', {
    tag: 'div',
    classes: 'header__tools-buttons-container header__container',
  });

  Button.draw('.header__tools-buttons-container', {
    text: 'RACE',
    classes: 'button small-button race-button',
  });

  Button.draw('.header__tools-buttons-container', {
    text: 'RESET',
    classes: 'button small-button reset-button',
  });

  Button.draw('.header__tools-buttons-container', {
    text: 'CREATE CARS',
    classes: 'button big-button button-create-cars',
  });
}

export const GarageTools = {
  draw() {
    createCreateForm();
    createUpdateForm();
    createToolsButtons();
  },
};
