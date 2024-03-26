import { createCar, getCars, updateCar } from '../../services/api';
import { CreateCarDTO, GetCarDTO } from '../../types/apiTypes';
import { Button } from '../button/Button';
import { carsData } from '../car/carsData';
import { Road, disableUpdateForm } from '../road/Road';
import { Tag } from '../tag/Tag';

export function updateCars() {
  const mainContent = document.querySelector('.main__content');
  if (mainContent instanceof HTMLElement) {
    mainContent.innerHTML = '';

    getCars(carsData.numberGaragePage).then((cars: { cars: GetCarDTO[]; total: number }) => {
      cars.cars.forEach((car) => {
        Road.draw(`${car.id}`, `${car.name}`, `${car.color}`);
      });
      const numberOfCars = cars.total;
      carsData.totalCars = numberOfCars;
      const mainCarsNumber = document.querySelector('.main__cars-number');
      if (mainCarsNumber instanceof HTMLElement) {
        mainCarsNumber.textContent = `${numberOfCars}`;
      }
      const garagePageNumber = document.querySelector('.main__page-number');
      if (garagePageNumber instanceof HTMLElement) {
        carsData.checkNumberGaragePage();
        garagePageNumber.textContent = `${carsData.numberGaragePage}`;
      }
    });
  }
}

export function updateButtonHandler() {
  const nameInput: HTMLElement | null = document.getElementById('updateName');
  const colorInput: HTMLElement | null = document.getElementById('updateColor');
  if (!(nameInput instanceof HTMLInputElement) || !(colorInput instanceof HTMLInputElement)) {
    return;
  }
  if (nameInput?.value === '') {
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

  updateCar(carsData.selectedId, formData)
    .then(() => {
      updateCars();

      nameInput.value = '';
      colorInput.value = '';
      carsData.selectedId = -1;
      disableUpdateForm();
    })
    .catch((error) => {
      console.error('Error creating car:', error);
    });
}

export function createButtonHandler() {
  const nameInput: HTMLElement | null = document.getElementById('createName');
  const colorInput: HTMLElement | null = document.getElementById('createColor');
  if (!(nameInput instanceof HTMLInputElement) || !(colorInput instanceof HTMLInputElement)) {
    return;
  }
  if (nameInput?.value === '') {
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

async function createCarsButtonHandler(): Promise<void> {
  const carsPromises: Promise<void>[] = [];

  for (let i = 0; i < 100; i += 1) {
    const name = carsData.getRandomCarName();
    const color = carsData.getRandomColor();

    const car: CreateCarDTO = {
      name,
      color,
    };

    const promise = createCar(car);

    carsPromises.push(promise);
  }

  try {
    await Promise.all(carsPromises);
    updateCars();
  } catch (error) {
    console.error(`Error creating car`, error);
  }
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

  Button.draw(
    '.header__input-update-form',
    {
      text: 'Update',
      classes: 'small-button button-update',
    },
    {
      type: 'click',
      selector: '.button-update',
      handler: updateButtonHandler,
    }
  );
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

  Button.draw(
    '.header__tools-buttons-container',
    {
      text: 'CREATE CARS',
      classes: 'button big-button button-create-cars',
    },
    {
      type: 'click',
      selector: '.button-create-cars',
      handler: createCarsButtonHandler,
    }
  );
}

export const GarageTools = {
  draw() {
    createCreateForm();
    createUpdateForm();
    createToolsButtons();
  },
};
