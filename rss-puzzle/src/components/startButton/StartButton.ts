import { openMainPage } from './StartButtonService';
import './StartButton.css';

export const StartButton = {
  template: `<button class="button button-start" id="startButton" type="submit">Start</button>`,

  draw(parent: HTMLElement) {
    parent.insertAdjacentHTML('beforeend', StartButton.template);
    StartButton.addListeners();
  },

  addListeners: () => {
    const startButton = document.getElementById('startButton');

    if (startButton) {
      startButton.addEventListener('click', openMainPage);
    }
  },
};
