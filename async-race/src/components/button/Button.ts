import { sortTime, sortWins } from '../../pages/WinnersPage';
import './Button.scss';

interface TemplateParams {
  text: string;
  classes: string;
  id?: string;
  isSubmit?: boolean;
}
interface ListenerParams {
  type: string;
  selector: string;
  handler: (event: Event) => void;
}

export function sortListener(event: Event) {
  const winsArrow = document.querySelector('.wins-arrow');
  const timeArrow = document.querySelector('.time-arrow');
  if (
    !(event.target instanceof HTMLElement) ||
    !(winsArrow instanceof HTMLElement) ||
    !(timeArrow instanceof HTMLElement)
  ) {
    return;
  }

  if (event.target.closest('.records-cell-button')) {
    if (event.target.closest('.wins-cell-button')) {
      sortWins(timeArrow, winsArrow);
    } else if (event.target.closest('.time-cell-button')) {
      sortTime(timeArrow, winsArrow);
    }
  }
}

export const Button = {
  template(params: TemplateParams) {
    return `<button class="button ${params.classes}" id="${params.id}" ${params.isSubmit ? 'type="submit"' : ''}>${params.text}</button>`;
  },

  draw(parent: string, templateParams: TemplateParams, listenerParams?: ListenerParams) {
    const parentElement = document.querySelector(`${parent}`);
    if (!(parentElement instanceof HTMLElement)) {
      return;
    }
    parentElement.insertAdjacentHTML('beforeend', Button.template(templateParams));
    if (listenerParams) {
      Button.addListeners(listenerParams);
    }
  },

  addListeners: (listenerParams: ListenerParams) => {
    const button = document.querySelector(listenerParams.selector);
    if (button) {
      button.addEventListener(listenerParams.type, listenerParams.handler);
    }
  },
};
