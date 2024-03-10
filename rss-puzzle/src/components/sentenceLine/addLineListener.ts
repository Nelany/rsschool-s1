import { addFieldListener } from '../field/addFieldListener';

export function addLineListener(lineWordCard: HTMLElement, fieldElement: HTMLElement, lineElement: HTMLElement) {
  lineWordCard.addEventListener('click', () => {
    const fieldCell = fieldElement.querySelector('.cell');
    const selectedWord = lineWordCard.cloneNode(true);

    if (fieldCell && selectedWord instanceof HTMLElement) {
      fieldCell.innerHTML = selectedWord.innerHTML;
      fieldCell.className = selectedWord.className;
      fieldCell.setAttribute('style', selectedWord.getAttribute('style') || '');
      lineWordCard.remove();

      if (fieldCell instanceof HTMLElement) {
        addFieldListener(fieldCell, lineElement, fieldElement);
      }
    }
  });
}
