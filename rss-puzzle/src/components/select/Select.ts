import './Select.scss';
import {
  BASIC_OPTION,
  BASIC_SELECTED_OPTION,
  COMPLETED_OPTION,
  COMPLETED_SELECTED_OPTION,
  getLevelOptions,
  getRoundOptions,
} from './SelectService';

export const Select = {
  template(whatSelect: 'level' | 'round') {
    return `<select class="select select-${whatSelect}"></select>`;
  },

  draw(parent: HTMLElement, whatSelect: 'level' | 'round') {
    parent.insertAdjacentHTML('afterend', Select.template(whatSelect));

    const select = document.querySelector(`.select-${whatSelect}`);
    if (!(select instanceof HTMLElement)) {
      return;
    }

    const options = whatSelect === 'level' ? getLevelOptions() : getRoundOptions();

    for (let i = 0; i < options.length; i += 1) {
      if (options[i] === BASIC_OPTION) {
        select.innerHTML += `<option value="${i + 1}" class="option option-${whatSelect}">${i + 1}</option>`;
      } else if (options[i] === COMPLETED_OPTION) {
        select.innerHTML += `<option value="${i + 1}" class="option option-${whatSelect} completed-option">${i + 1}</option>`;
      } else if (options[i] === BASIC_SELECTED_OPTION) {
        select.innerHTML += `<option value="${i + 1}" class="option option-${whatSelect}" selected>${i + 1}</option>`;
      } else if (options[i] === COMPLETED_SELECTED_OPTION) {
        select.innerHTML += `<option value="${i + 1}" class="option option-${whatSelect} completed-option  selected">${i + 1}</option>`;
      }
    }
  },
};
