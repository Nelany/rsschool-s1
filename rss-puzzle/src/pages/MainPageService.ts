import { wordCollections } from '../common/services/wordCollections';
import { SentenceLine } from '../components/sentenceLine/SentenceLine';

const markTimeout = 1200;

function markWrongWords() {
  const fieldDivs: NodeListOf<HTMLDivElement> = document.querySelectorAll('.word');
  const sentence = wordCollections.getCurrentSentence();
  const wordsArray = sentence.split(' ');
  const previousSentencesLength = fieldDivs.length - wordsArray.length;
  for (let i = fieldDivs.length - 1; i >= previousSentencesLength; i -= 1) {
    const divTextContent: string = fieldDivs[i].textContent || '';
    if (divTextContent !== wordsArray[i - previousSentencesLength]) {
      fieldDivs[i].classList.add('wrong-word');
      setTimeout(() => {
        fieldDivs[i].classList.remove('wrong-word');
      }, markTimeout);
    }
  }
}

export function continueButtonHandler() {
  wordCollections.switchToNextSentence();
  const field = document.querySelector('.field');
  const continueButton = document.querySelector('.button-continue');
  const line = document.querySelector('.line');
  if (field instanceof HTMLElement && continueButton instanceof HTMLElement && line instanceof HTMLElement) {
    line.remove();
    if (wordCollections.isResetField) {
      field.innerHTML = '';
    }
    SentenceLine.draw(field);
    continueButton.classList.add('disabled');
  }
}

export function checkButtonHandler() {
  const answerArray = SentenceLine.getAnswerArray();
  const checkButton = document.querySelector('.button-check');
  if (!checkButton) {
    return;
  }
  if (wordCollections.getCurrentSentence() === answerArray.join(' ')) {
    const continueButton = document.querySelector('.button-continue');
    if (continueButton) {
      continueButton.classList.remove('disabled');
    }

    checkButton.classList.add('disabled');

    return;
  }
  checkButton.classList.add('shaking');
  markWrongWords();
  setTimeout(() => {
    checkButton.classList.remove('shaking');
  }, markTimeout);
}
