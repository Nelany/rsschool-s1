import { PageTemplate } from './components/pageTemplate/PageTemplate';
import { disableUpdateForm, resetSelectButtons } from './components/road/Road';
import './global.scss';

import { GaragePage } from './pages/GaragePage';

function bodyListener(event: Event) {
  const { target } = event;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (!target.closest('.header__input-update-form') && !target.classList.contains('select-button')) {
    disableUpdateForm();
    resetSelectButtons();
  }
}

function loadApp() {
  PageTemplate.draw();
  GaragePage.draw();

  document.body.addEventListener('click', bodyListener);
}

loadApp();
