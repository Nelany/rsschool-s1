import './Select.scss';

export const Select = {
  template: `<select class="select">
  <option value="1" class="option">1</option>
  <option value="1" class="option">1</option>
  <option value="1" class="option">1</option>
  <option value="1" class="option">1</option>
</select>`,
  draw(parent: HTMLElement) {
    parent.insertAdjacentHTML('afterend', Select.template);
  },
};
