import { deleteCar, startStopEngine, switchEngineToDriveMode } from '../../services/api';
import { StartStopCarsEngineDTO } from '../../types/apiTypes';
import { Car } from '../car/Car';
import { carsData } from '../car/carsData';
import { updateCars } from '../garageTools/GarageTools';
import { Tag } from '../tag/Tag';
import './Road.scss';

export function resetSelectButtons() {
  const selectButtons = document.querySelectorAll('.select-button');
  selectButtons.forEach((button) => {
    button.classList.remove('green-border');
  });
}

export function disableUpdateForm() {
  const updateForm = document.querySelector('.header__input-update-form');

  if (updateForm instanceof HTMLElement) {
    updateForm.classList.add('disabled');
    carsData.selectedId = -1;
    const nameInput: HTMLElement | null = document.getElementById('updateName');
    const colorInput: HTMLElement | null = document.getElementById('updateColor');
    if (!(nameInput instanceof HTMLInputElement) || !(colorInput instanceof HTMLInputElement)) {
      return;
    }

    nameInput.value = '';
    colorInput.value = '#000000';
    resetSelectButtons();
  }
}

export function selectButtonHandler(event: Event) {
  const { target } = event;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const dataId = target.dataset.id;

  if (dataId) {
    const numberPart: number = parseInt(dataId.split('-')[1], 10);

    carsData.selectedId = numberPart;

    const updateForm = document.querySelector('.header__input-update-form');

    if (updateForm instanceof HTMLElement) {
      resetSelectButtons();

      if (updateForm.classList.contains('disabled')) {
        updateForm.classList.remove('disabled');
        carsData.selectedId = numberPart;
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

export function startAnimation(id: number, startData: StartStopCarsEngineDTO) {
  const carElement = document.querySelector(`[data-id="car-${id}"]`);
  const parentElement = document.querySelector(`[data-id="track-${id}"]`);

  if (!(parentElement instanceof HTMLElement) || !(carElement instanceof SVGElement)) {
    return;
  }

  const parentWidth = parentElement.offsetWidth;
  const carBoundingBox = carElement.getBoundingClientRect();
  const carWidth = carBoundingBox.width;
  const pathLength = parentWidth - carWidth;
  const animationDuration = startData.distance / startData.velocity;

  let startTime: number | null = null;

  function animate(currentTime: number) {
    if (!startTime) {
      startTime = currentTime;
    }

    if (!(carElement instanceof SVGElement)) {
      return;
    }

    const elapsedTime = currentTime - startTime;

    const progress = Math.min(elapsedTime / animationDuration, 1);

    const currentDistance = pathLength * progress;

    carElement.style.left = `${currentDistance}px`;

    if (elapsedTime < animationDuration && !carsData.stoppedCars.includes(id)) {
      requestAnimationFrame(animate);
    }
    if (carsData.stoppedCars.includes(id)) {
      carsData.stoppedCars = carsData.stoppedCars.filter((number) => number !== id);
    }
  }

  requestAnimationFrame(animate);
}

function goButtonHandler(event: Event) {
  const { target } = event;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  target.classList.add('disabled');

  const dataId = target.dataset.id;

  if (dataId) {
    const str = dataId;
    const numberPart: number = parseInt(str.split('-')[1], 10);

    carsData.stoppedCars = carsData.stoppedCars.filter((number) => number !== numberPart);

    startStopEngine(numberPart, 'started').then((startData: StartStopCarsEngineDTO | null) => {
      if (startData === null) {
        return;
      }
      startAnimation(numberPart, startData);
      switchEngineToDriveMode(numberPart)
        .then((response) => {
          if (response && response.status === 500) {
            carsData.stoppedCars.push(numberPart);
          }
        })
        .catch((error) => {
          console.error('Error switching engine to drive mode:', error);
        });

      const stopButton = document.querySelector(`[data-id="stop-${numberPart}"]`);
      if (stopButton) {
        stopButton.classList.remove('disabled');
      }
    });
  } else {
    console.error('data-id attribute is missing or invalid');
  }
}

function stopButtonHandler(event: Event) {
  const { target } = event;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  target.classList.add('disabled');

  const dataId = target.dataset.id;

  if (dataId) {
    const str = dataId;
    const numberPart: number = parseInt(str.split('-')[1], 10);

    carsData.stoppedCars.push(numberPart);
    const carElement = document.querySelector(`[data-id="car-${numberPart}"]`);
    if (carElement instanceof SVGElement) {
      setTimeout(() => {
        carElement.style.left = '0px';
      }, 100);
    }

    startStopEngine(numberPart, 'stopped').then(() => {
      const goButton = document.querySelector(`[data-id="go-${numberPart}"]`);
      if (goButton) {
        goButton.classList.remove('disabled');
      }
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
    <button class="button button-pedal go-button" data-id="go-${id}">GO</button>
    <button class="button button-pedal stop-button disabled" data-id="stop-${id}">STOP</button>
  </div>

  <div class="main__track" data-id="track-${id}">
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
      const goButton = document.querySelector(`[data-id="go-${dataId}"]`);

      if (goButton) {
        goButton.addEventListener('click', goButtonHandler);
      }
      const stopButton = document.querySelector(`[data-id="stop-${dataId}"]`);

      if (stopButton) {
        stopButton.addEventListener('click', stopButtonHandler);
      }
    }
  },
};
