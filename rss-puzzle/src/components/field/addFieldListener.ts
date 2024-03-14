import { dragstart } from '../../pages/MainPageService';
import { SentenceLine } from '../sentenceLine/SentenceLine';
import { addLineListener } from '../sentenceLine/addLineListener';

export function addFieldListener(fieldCell: HTMLElement, lineElement: HTMLElement, fieldElement: HTMLElement) {
  if (fieldCell.classList.contains('cell')) {
    return;
  }
  const fieldWordCard = fieldCell;

  if (!fieldWordCard) {
    return;
  }
  console.log('ho');

  const clickHandler = () => {
    const checkButton = document.querySelector('.button-check');
    if (checkButton) {
      checkButton.classList.add('disabled');
    }

    fieldWordCard.removeEventListener('click', clickHandler);

    const selectedWordCell = fieldWordCard.cloneNode(true);

    fieldWordCard.classList.remove('word');
    fieldWordCard.classList.add('cell');
    fieldWordCard.draggable = false;

    if (fieldWordCard.textContent) {
      const wordToRemove = fieldWordCard.textContent.trim();
      const answerArray = SentenceLine.getAnswerArray();
      if (wordToRemove) {
        const indexToRemove = answerArray.indexOf(wordToRemove);
        if (indexToRemove !== -1) {
          answerArray.splice(indexToRemove, 1);
          SentenceLine.setAnswerArray(answerArray);
        }
      }
    }
    fieldWordCard.textContent = '';

    if (fieldWordCard instanceof HTMLElement) {
      fieldWordCard.removeAttribute('style');
      fieldWordCard.removeAttribute('data-index');
    }

    const newLineWordCard = lineElement.appendChild(selectedWordCell);

    if (newLineWordCard instanceof HTMLDivElement) {
      addLineListener(newLineWordCard, fieldElement, lineElement);
      newLineWordCard.addEventListener('dragstart', dragstart);
    }
  };
  if (fieldWordCard instanceof HTMLElement) {
    fieldWordCard.addEventListener('click', clickHandler);
  }
}
