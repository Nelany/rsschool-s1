import { removeUserDataAndOpenLoginPage } from './LogoutStringService';
import './LogoutString.scss';

export const LogoutString = {
  template: `<h5 class="log-out-string" id="logOut" type="submit">Do you want to log out?</h5>`,

  draw(parent: HTMLElement) {
    parent.insertAdjacentHTML('beforeend', LogoutString.template);
    LogoutString.addListeners();
  },

  addListeners: () => {
    const startButton = document.getElementById('logOut');

    if (startButton) {
      startButton.addEventListener('click', removeUserDataAndOpenLoginPage);
    }
  },
};
