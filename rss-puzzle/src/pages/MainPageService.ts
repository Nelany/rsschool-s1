import { wordCollections } from '../common/services/wordCollections';
import { SentenceLine } from '../components/sentenceLine/SentenceLine';

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
  if (wordCollections.getCurrentSentence() === answerArray.join(' ')) {
    const continueButton = document.querySelector('.button-continue');
    if (continueButton) {
      continueButton.classList.remove('disabled');
    }

    if (checkButton) {
      checkButton.classList.add('disabled');
    }
  } else if (checkButton) {
    checkButton.classList.add('shaking');
    setTimeout(() => {
      checkButton.classList.remove('shaking');
    }, 1200);
  }
}
