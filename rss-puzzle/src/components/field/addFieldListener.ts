import { dragover, dragstart, drop } from '../../pages/MainPageService';
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

  const clickHandler = () => {
    console.log('ho');
    const checkButton = document.querySelector('.button-check');
    if (checkButton) {
      checkButton.classList.add('disabled');
    }

    // fieldWordCard.removeEventListener('click', clickHandler);
    const newFieldWordCard = fieldWordCard.cloneNode(true);
    if (!fieldWordCard.parentNode) {
      return;
    }
    if (!(newFieldWordCard instanceof HTMLElement)) {
      return;
    }
    fieldWordCard.parentNode.replaceChild(newFieldWordCard, fieldWordCard);

    const selectedWordCell = newFieldWordCard.cloneNode(true);

    newFieldWordCard.classList.remove('word');
    newFieldWordCard.classList.add('cell');
    newFieldWordCard.draggable = false;

    if (newFieldWordCard.textContent) {
      const wordToRemove = newFieldWordCard.textContent.trim();
      const answerArray = SentenceLine.getAnswerArray();
      if (wordToRemove) {
        const indexToRemove = answerArray.indexOf(wordToRemove);
        if (indexToRemove !== -1) {
          answerArray.splice(indexToRemove, 1);
          SentenceLine.setAnswerArray(answerArray);
        }
      }
    }
    newFieldWordCard.textContent = '';

    if (newFieldWordCard instanceof HTMLElement) {
      newFieldWordCard.removeAttribute('style');
      newFieldWordCard.removeAttribute('data-index');
    }

    const newLineWordCard = lineElement.appendChild(selectedWordCell);

    if (newLineWordCard instanceof HTMLDivElement) {
      addLineListener(newLineWordCard, fieldElement, lineElement);
      newLineWordCard.addEventListener('dragstart', dragstart);
    }

    newFieldWordCard.addEventListener('dragover', dragover);
    newFieldWordCard.addEventListener('drop', drop);
  };

  if (fieldWordCard instanceof HTMLElement) {
    fieldWordCard.addEventListener('click', clickHandler);
  }
}
