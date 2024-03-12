import { SentenceLine } from '../sentenceLine/SentenceLine';
import { addLineListener } from '../sentenceLine/addLineListener';

export function addFieldListener(fieldCell: HTMLElement, lineElement: HTMLElement, fieldElement: HTMLElement) {
  const fieldWordCard = fieldCell;

  const clickHandler = () => {
    fieldWordCard.removeEventListener('click', clickHandler);

    const selectedWordCell = fieldWordCard.cloneNode(true);

    fieldWordCard.classList.remove('word');
    fieldWordCard.classList.add('cell');

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
    }

    const newLineWordCard = lineElement.appendChild(selectedWordCell);

    if (newLineWordCard instanceof HTMLDivElement) {
      addLineListener(newLineWordCard, fieldElement, lineElement);
    }
  };

  fieldWordCard.addEventListener('click', clickHandler);
}
