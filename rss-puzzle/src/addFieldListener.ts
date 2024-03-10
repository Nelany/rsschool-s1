import { addLineListener } from './addLineListener';

export function addFieldListener(fieldCell: HTMLElement, lineElement: HTMLElement, fieldElement: HTMLElement) {
  const fieldWordCard = fieldCell;

  const clickHandler = () => {
    fieldWordCard.removeEventListener('click', clickHandler);

    const selectedWordCell = fieldWordCard.cloneNode(true);

    fieldWordCard.classList.remove('word');
    fieldWordCard.classList.add('cell');
    fieldWordCard.textContent = '';

    if (fieldWordCard instanceof HTMLElement) {
      fieldWordCard.removeAttribute('style');
    }

    const newLineWordCard = lineElement.appendChild(selectedWordCell);

    if (newLineWordCard instanceof HTMLDivElement) {
      addLineListener(newLineWordCard, fieldElement, lineElement);
    }
  };

  fieldWordCard.addEventListener('click', clickHandler);
}
