import { wordCollections } from '../../common/services/wordCollections';
import { dragstart } from '../../pages/MainPageService';
import { addFieldListener } from '../field/addFieldListener';
import { SentenceLine } from './SentenceLine';

export function addLineListener(lineWordCard: HTMLElement, fieldElement: HTMLElement, lineElement: HTMLElement) {
  lineWordCard.addEventListener('click', () => {
    const fieldCell = fieldElement.querySelector('.cell');
    const selectedWord = lineWordCard.cloneNode(true);

    if (lineWordCard.textContent) {
      const answerArray = SentenceLine.getAnswerArray();
      answerArray.push(lineWordCard.textContent);
      SentenceLine.setAnswerArray(answerArray);

      if (fieldCell instanceof HTMLElement && selectedWord instanceof HTMLElement) {
        fieldCell.innerHTML = selectedWord.innerHTML;
        fieldCell.className = selectedWord.className;
        fieldCell.setAttribute('style', selectedWord.getAttribute('style') || '');
        fieldCell.dataset.index = selectedWord.dataset.index;
        fieldCell.draggable = true;
        fieldCell.addEventListener('dragstart', dragstart);
        lineWordCard.remove();

        if (fieldCell instanceof HTMLElement) {
          addFieldListener(fieldCell, lineElement, fieldElement);
        }

        if (SentenceLine.answerArray.length === wordCollections.getCurrentSentence().split(' ').length) {
          const checkButton = document.querySelector('.button-check');
          if (checkButton) {
            checkButton.classList.remove('disabled');
          }
        }
      }
    }
  });
}
