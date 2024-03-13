import { wordCollections } from '../common/services/wordCollections';
import { SentenceLine } from '../components/sentenceLine/SentenceLine';

const markTimeout = 1200;
const littleTimeout = 100;
const mediumTimeout = 500;
const largeTimeout = 500;

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

function deleteAnswerCells() {
  const fieldDivs: NodeListOf<HTMLDivElement> = document.querySelectorAll('.field>div');
  const sentence = wordCollections.getCurrentSentence();
  const wordsArray = sentence.split(' ');
  const previousSentencesLength = fieldDivs.length - wordsArray.length;
  for (let i = fieldDivs.length - 1; i >= previousSentencesLength; i -= 1) {
    fieldDivs[i].remove();
  }
}

export function continueButtonHandler() {
  wordCollections.switchToNextSentence();
  const field = document.querySelector('.field');
  const continueButton = document.querySelector('.button-continue');
  const line = document.querySelector('.line');
  const checkButton = document.querySelector('.button-check');
  const autocompleteButton = document.querySelector('.button-autocomplete');

  if (field instanceof HTMLElement && continueButton instanceof HTMLElement && line instanceof HTMLElement) {
    line.remove();
    if (wordCollections.isResetField) {
      field.innerHTML = '';
    }
    SentenceLine.draw(field);
    if (!checkButton || !autocompleteButton) {
      return;
    }
    continueButton.classList.add('disappearing');
    autocompleteButton.classList.remove('disabled');
    setTimeout(() => {
      continueButton.classList.add('hidden');
      continueButton.classList.remove('disappearing');
      checkButton.classList.remove('hidden');
      checkButton.classList.add('semi-appearing');
    }, mediumTimeout);
    setTimeout(() => {
      checkButton.classList.remove('semi-appearing');
    }, largeTimeout);
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
      checkButton.classList.add('disabled');
      setTimeout(() => {
        checkButton.classList.add('hidden');
        continueButton.classList.remove('hidden');
        continueButton.classList.remove('disabled');
        continueButton.classList.add('button-green');
      }, littleTimeout);
      setTimeout(() => {
        continueButton.classList.remove('button-green');
      }, markTimeout);
    }

    return;
  }
  checkButton.classList.add('shaking');
  markWrongWords();
  setTimeout(() => {
    checkButton.classList.remove('shaking');
  }, markTimeout);
}

export function autocompleteButtonHandler() {
  const wordsArray = wordCollections.getCurrentSentence().split(' ');
  deleteAnswerCells();
  const lineElement = document.querySelector('.line');
  const fieldElement = document.querySelector('.field');
  const totalLetters = wordsArray.join('').length;
  for (let i = 0; i < wordsArray.length; i += 1) {
    const newDiv = document.createElement('div');
    const word = wordsArray[i];
    newDiv.textContent = word;
    newDiv.classList.add('word');
    const lettersInWord = word.length;
    const widthPercentage = (lettersInWord / totalLetters) * 100;
    newDiv.style.width = `${widthPercentage}%`;
    if (lineElement && fieldElement) {
      fieldElement.appendChild(newDiv);
    }
  }
  if (lineElement instanceof HTMLElement) {
    lineElement.innerHTML = '';
    const continueButton = document.querySelector('.button-continue');
    const checkButton = document.querySelector('.button-check');
    const autocompleteButton = document.querySelector('.button-autocomplete');
    if (continueButton && checkButton && autocompleteButton) {
      checkButton.classList.add('disabled');
      autocompleteButton.classList.add('disabled');
      setTimeout(() => {
        checkButton.classList.add('hidden');
        continueButton.classList.remove('hidden');
        continueButton.classList.remove('disabled');
      }, littleTimeout);
    }
  }
}
