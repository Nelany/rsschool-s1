import './Field.css';

export const Field = {
  template: `<div class="field"></div>`,
  draw(parent: HTMLElement) {
    parent.insertAdjacentHTML('beforeend', Field.template);
  },
};
