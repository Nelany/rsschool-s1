import {
  createCar,
  createWinner,
  getCars,
  getWinner,
  startStopEngine,
  switchEngineToDriveMode,
  updateCar,
  updateWinner,
} from '../../services/api';
import { CreateCarDTO, GetCarDTO, GetWinnerDTO, StartStopCarsEngineDTO } from '../../types/apiTypes';
import { Button } from '../button/Button';
import { carsData } from '../car/carsData';
import { Popup } from '../popup/Popup';
import { Road, disableUpdateForm, startAnimation } from '../road/Road';
import { Tag } from '../tag/Tag';

function toggleButtons(isTurnOff: boolean) {
  const anotherButtons = document.querySelectorAll('.button');
  const inputs = document.querySelectorAll('.input');
  const resetButton = document.querySelector('.reset-button');
  const raceButton = document.querySelector('.race-button');

  if (!resetButton || !raceButton) {
    return;
  }

  if (isTurnOff) {
    resetButton.classList.remove('turnOff');
    resetButton.classList.add('reset-race');

    anotherButtons.forEach((button) => {
      if (!button.classList.contains('reset-button')) {
        button.classList.add('turnOff');
      }
    });

    inputs.forEach((input) => {
      input.classList.add('turnOff');
    });
  } else {
    resetButton.classList.remove('reset-race');

    anotherButtons.forEach((button) => {
      if (!button.classList.contains('reset-button')) {
        button.classList.remove('turnOff');
      }
    });

    inputs.forEach((input) => {
      input.classList.remove('turnOff');
    });
  }
}

function toggleButtonsEndRace(isEndRace: boolean) {
  const anotherButtons = document.querySelectorAll('.button');
  const inputs = document.querySelectorAll('.input');
  const resetButton = document.querySelector('.reset-button');
  const raceButton = document.querySelector('.race-button');

  if (!resetButton || !raceButton) {
    return;
  }

  if (!isEndRace) {
    resetButton.classList.remove('disable');

    anotherButtons.forEach((button) => {
      if (!button.classList.contains('reset-button')) {
        button.classList.add('disable');
      }
    });

    inputs.forEach((input) => {
      input.classList.add('disable');
    });
  } else {
    anotherButtons.forEach((button) => {
      if (!button.classList.contains('reset-button')) {
        button.classList.remove('disable');
      }
    });

    inputs.forEach((input) => {
      input.classList.remove('disable');
    });
  }
}

function getCarsIds() {
  const carsOnThePage = document.querySelectorAll('.car');

  const dataIdsArray = Array.from(carsOnThePage)
    .map((svg) => {
      if (svg instanceof SVGElement) {
        return svg.dataset.id;
      }
      return null;
    })
    .filter((element) => element);

  const carIds = dataIdsArray
    .map((dataId) => {
      if (dataId) {
        const id: number = parseInt(dataId.split('-')[1], 10);
        return id;
      }
      return null;
    })
    .filter((id) => id);

  return carIds;
}

function checkWinners() {
  const carsOnThePage = document.querySelectorAll('.car');
  if (Object.keys(carsData.finishedRaces).length === carsOnThePage.length) {
    if (carsData.isRace) {
      carsData.carsTimeArray.sort((a, b) => a.time - b.time);
      carsData.carsTimeArray.forEach((carTime) => {
        if (carsData.finishedRaces[carTime.id] === true) {
          getWinner(carTime.id).then((winnerData: GetWinnerDTO | null) => {
            if (winnerData) {
              const newWinnerData = {
                wins: winnerData.wins + 1,
                time: winnerData.time,
              };

              if (winnerData.time > carTime.time) {
                newWinnerData.time = carTime.time;
              }

              updateWinner(carTime.id, newWinnerData).then(() => {
                Popup.open(carTime.id, carTime.time);
              });
            } else {
              const newWinner = {
                id: carTime.id,
                wins: 1,
                time: carTime.time,
              };
              createWinner(newWinner).then(() => {
                Popup.open(carTime.id, carTime.time);
              });
            }
          });

          carsData.finishedRaces = {};
          carsData.carsTimeArray = [];
          toggleButtonsEndRace(true);
        }
      });
      carsData.isRace = false;
    }

    carsData.finishedRaces = {};
    carsData.carsTimeArray = [];
    toggleButtonsEndRace(true);
  }
}

function addCarTimeToArray(id: number, startData: StartStopCarsEngineDTO) {
  const carTime = {
    id,
    time: Math.round((startData.distance / startData.velocity / 1000) * 100) / 100,
  };

  carsData.carsTimeArray.push(carTime);
}

async function raceButtonHandler(event: Event) {
  const { target } = event;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  carsData.isRace = true;
  target.classList.add('turnOff');
  toggleButtonsEndRace(false);

  const carIds = getCarsIds();
  carIds.forEach((id) => {
    carsData.stoppedCars = carsData.stoppedCars.filter((number) => number !== id);
  });

  const startedEngines = carIds.map(async (id) => id && startStopEngine(id, 'started'));

  const readyCarsStartData = await Promise.all(startedEngines);

  if (readyCarsStartData === null) {
    return;
  }

  try {
    readyCarsStartData.forEach(async (car) => {
      if (!car) {
        return;
      }
      startAnimation(car.id, car);
      addCarTimeToArray(car.id, car);

      const startCarResponse = await switchEngineToDriveMode(car.id);
      if (startCarResponse && startCarResponse.success === true) {
        carsData.finishedRaces[`${car.id}`] = true;
        checkWinners();
      } else {
        carsData.finishedRaces[`${car.id}`] = false;
        checkWinners();
      }
      if (startCarResponse && startCarResponse.status === 500) {
        carsData.stoppedCars.push(car.id);
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }

  toggleButtons(true);
}

function turnOffAnimations() {
  const carsIds = getCarsIds();
  carsIds.forEach((id) => {
    if (id) {
      carsData.stoppedCars.push(id);
      const carElement = document.querySelector(`[data-id="car-${id}"]`);
      if (carElement instanceof SVGElement) {
        setTimeout(() => {
          carElement.style.left = '0px';
        }, 100);
      }
    } else {
      console.error('data-id attribute is missing or invalid');
    }
  });
}

async function resetButtonHandler(event: Event) {
  const { target } = event;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  Popup.close();
  carsData.isRace = false;
  target.classList.add('turnOff');
  target.classList.add('disable');

  turnOffAnimations();
  const carIds = getCarsIds();

  const startedEngines = carIds.map(async (id) => id && startStopEngine(id, 'stopped'));

  await Promise.allSettled(startedEngines);
  toggleButtons(false);
}

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
    value: carsData.createName,
  });

  Tag.draw('.header__input-create-form', {
    tag: 'input',
    classes: 'input input-color input-color-create',
    id: 'createColor',
    type: 'color',
    required: true,
    value: carsData.createColor,
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

  Button.draw(
    '.header__tools-buttons-container',
    {
      text: 'RACE',
      classes: 'button small-button race-button',
    },
    {
      type: 'click',
      selector: '.race-button',
      handler: raceButtonHandler,
    }
  );

  Button.draw(
    '.header__tools-buttons-container',
    {
      text: 'RESET',
      classes: 'button small-button reset-button turnOff',
    },
    {
      type: 'click',
      selector: '.reset-button',
      handler: resetButtonHandler,
    }
  );

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
