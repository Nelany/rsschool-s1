import { wordCollections } from '../common/services/wordCollections';
import { addFieldListener } from '../components/field/addFieldListener';
import { Select } from '../components/select/Select';
import { SentenceLine } from '../components/sentenceLine/SentenceLine';
import { addLineListener } from '../components/sentenceLine/addLineListener';

const MARK_TIMEOUT = 1200;
const LITTLE_TIMEOUT = 100;
const MEDIUM_TIMEOUT = 500;
const LARGE_TIMEOUT = 2000;

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
      }, MARK_TIMEOUT);
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

export function checkIfWrongAnswer() {
  const fieldDivs: NodeListOf<HTMLDivElement> = document.querySelectorAll('.field>div');
  const sentence = wordCollections.getCurrentSentence();
  const wordsArray = sentence.split(' ');
  const previousSentencesLength = fieldDivs.length - wordsArray.length;
  let isError = false;
  for (let i = fieldDivs.length - 1; i >= previousSentencesLength; i -= 1) {
    if (fieldDivs[i].textContent !== wordsArray[i - previousSentencesLength]) {
      isError = true;
    }
  }

  return isError;
}

export function drawSelects() {
  const levelSelectLabel = document.querySelector('.level-select-label');
  if (levelSelectLabel instanceof HTMLElement) {
    Select.draw(levelSelectLabel, 'level');
  }

  const roundSelectLabel = document.querySelector('.round-select-label');
  if (roundSelectLabel instanceof HTMLElement) {
    Select.draw(roundSelectLabel, 'round');
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
    drawSelects();

    const speakerButton = document.querySelector('.speaker-button');
    if (!speakerButton) {
      return;
    }
    const restoredIsSpeaker = localStorage.getItem('isOffSpeak');
    let isOffSpeak = false;
    if (restoredIsSpeaker) {
      isOffSpeak = JSON.parse(restoredIsSpeaker);
    }
    if (isOffSpeak) {
      speakerButton.classList.add('button-off');
      const speaker = document.querySelector('.speaker');
      if (speaker instanceof HTMLElement) {
        speaker.classList.remove('appearing');
      }
    }

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
    }, MEDIUM_TIMEOUT);
    setTimeout(() => {
      checkButton.classList.remove('semi-appearing');
    }, LARGE_TIMEOUT);
  }
}

export function checkButtonHandler() {
  const checkButton = document.querySelector('.button-check');
  if (!checkButton) {
    return;
  }
  if (!checkIfWrongAnswer()) {
    const allWords = document.querySelectorAll('.word');
    allWords.forEach((word) => {
      if (word instanceof HTMLElement) {
        word.setAttribute('draggable', 'false');
      }
    });
    const continueButton = document.querySelector('.button-continue');
    if (continueButton) {
      const translate = document.querySelector('.main__translate');
      if (translate instanceof HTMLElement) {
        translate.classList.add('appearing');
      }
      const speaker = document.querySelector('.speaker');
      if (speaker instanceof HTMLElement) {
        speaker.classList.add('appearing');
      }

      checkButton.classList.add('disabled');
      setTimeout(() => {
        checkButton.classList.add('hidden');
        continueButton.classList.remove('hidden');
        continueButton.classList.remove('disabled');
        continueButton.classList.add('button-green');
      }, LITTLE_TIMEOUT);
      setTimeout(() => {
        continueButton.classList.remove('button-green');
      }, MARK_TIMEOUT);
    }

    return;
  }
  checkButton.classList.add('shaking');
  markWrongWords();
  setTimeout(() => {
    checkButton.classList.remove('shaking');
  }, MARK_TIMEOUT);
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
      }, LITTLE_TIMEOUT);
    }
  }

  const translate = document.querySelector('.main__translate');
  if (translate instanceof HTMLElement) {
    translate.classList.add('appearing');
  }

  const speaker = document.querySelector('.speaker');
  if (speaker instanceof HTMLElement) {
    speaker.classList.add('appearing');
  }
}

function resetCell(wordToCell: HTMLElement) {
  const child = wordToCell;
  child.textContent = '';
  child.classList.remove('word');
  child.classList.add('cell');
  child.removeAttribute('style');
  child.removeAttribute('data-index');
  child.setAttribute('draggable', 'false');
}

export function dragstart(event: DragEvent) {
  if (event.target instanceof HTMLElement) {
    const { target } = event;
    const data = {
      isFieldParent: event.target.closest('.field'),
      class: target.className,
      style: target.getAttribute('style'),
      textContent: target.textContent,
      index: target.dataset.index,
    };
    if (event.dataTransfer) {
      event.dataTransfer.setData('application/json', JSON.stringify(data));
    }
  }
}

export function dragover(event: DragEvent) {
  if (event.target instanceof HTMLElement) {
    if (event.target.classList.contains('word')) {
      return true;
    }
  }

  event.preventDefault();

  return undefined;
}

export function dropFieldCell(event: DragEvent) {
  event.preventDefault();
  const data = event.dataTransfer?.getData('application/json');
  if (data) {
    const parsedData = JSON.parse(data);
    const { target } = event;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (parsedData.isFieldParent) {
      const wordToCell = document.querySelector(`[data-index="${parsedData.index}"]`);
      if (wordToCell instanceof HTMLElement) {
        resetCell(wordToCell);
      }
    }

    if (parsedData.class) {
      target.className = parsedData.class;
    }
    if (parsedData.style) {
      target.setAttribute('style', parsedData.style);
    }
    if (parsedData.textContent) {
      target.textContent = parsedData.textContent;
    }
    target.setAttribute('draggable', 'true');

    const originalContainer = document.querySelector('.line');
    if (originalContainer) {
      const originalElement = originalContainer.querySelector(`[data-index="${parsedData.index}"]`);
      if (originalElement) {
        originalElement.remove();
      }
    }

    if (parsedData.index) {
      target.dataset.index = parsedData.index;
      target.addEventListener('dragstart', dragstart);
    }

    if (parsedData.textContent && !parsedData.isFieldParent) {
      const answerArray = SentenceLine.getAnswerArray();
      answerArray.push(parsedData.textContent);
      SentenceLine.setAnswerArray(answerArray);
    }

    if (SentenceLine.answerArray.length === wordCollections.getCurrentSentence().split(' ').length) {
      const checkButton = document.querySelector('.button-check');
      if (checkButton) {
        checkButton.classList.remove('disabled');
      }
    }

    const fieldElement = document.querySelector('.field');
    const lineElement = document.querySelector('.line');
    if (fieldElement instanceof HTMLElement && lineElement instanceof HTMLElement) {
      addFieldListener(target, lineElement, fieldElement);
    }
  }
}

export function dropLine(event: DragEvent) {
  event.preventDefault();
  if (event.dataTransfer && event.target instanceof HTMLElement) {
    const data = event.dataTransfer.getData('application/json');
    if (data) {
      const parsedData = JSON.parse(data);
      const { target } = event;

      const wordToCell = document.querySelector(`[data-index="${parsedData.index}"]`);

      if (wordToCell instanceof HTMLElement) {
        if (parsedData.isFieldParent) {
          const selectedWordCell = wordToCell.cloneNode(true);
          target.appendChild(selectedWordCell);

          resetCell(wordToCell);
        } else {
          target.appendChild(wordToCell);
        }
      }

      const newChild = document.querySelector(`[data-index="${parsedData.index}"]`);
      if (newChild instanceof HTMLElement) {
        newChild.addEventListener('dragstart', dragstart);

        if (newChild.textContent && parsedData.isFieldParent) {
          const wordToRemove = newChild.textContent.trim();
          const answerArray = SentenceLine.getAnswerArray();
          if (wordToRemove) {
            const indexToRemove = answerArray.indexOf(wordToRemove);
            if (indexToRemove !== -1) {
              answerArray.splice(indexToRemove, 1);
              SentenceLine.setAnswerArray(answerArray);
            }
          }
          const fieldElement = document.querySelector('.field');
          const lineElement = document.querySelector('.line');
          if (fieldElement instanceof HTMLElement && lineElement instanceof HTMLElement) {
            addLineListener(newChild, fieldElement, lineElement);
          }
        }
      }

      const checkButton = document.querySelector('.button-check');
      if (checkButton) {
        checkButton.classList.add('disabled');
      }
    }
  }
}

export function drop(event: DragEvent) {
  if (event.target instanceof HTMLElement && event.target.classList.contains('cell')) {
    dropFieldCell(event);
  } else if (event.target instanceof HTMLElement && event.target.classList.contains('line')) {
    dropLine(event);
  }
}

export function translateButtonHandler() {
  let isOffTranslate = false;
  const translateButton = document.querySelector('.translate-button');
  if (!translateButton) {
    return;
  }
  if (translateButton.classList.contains('button-off')) {
    translateButton.classList.remove('button-off');
    const translate = document.querySelector('.main__translate');
    if (translate instanceof HTMLElement) {
      translate.classList.add('appearing');
    }
    isOffTranslate = false;
  } else {
    translateButton.classList.add('button-off');
    const translate = document.querySelector('.main__translate');
    if (translate instanceof HTMLElement) {
      translate.classList.remove('appearing');
    }
    isOffTranslate = true;
  }

  const isOffTranslateString = JSON.stringify(isOffTranslate);
  localStorage.setItem('isOffTranslate', isOffTranslateString);
}

let isPlaying: boolean;

export async function speakerHandler() {
  if (isPlaying) {
    return;
  }

  isPlaying = true;

  const file = wordCollections.getCurrentSpeak();
  const audioSrc = `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/${file}`;

  const audio = new Audio(audioSrc);
  audio.play();

  const speaker = document.querySelector('.speaker');
  if (!(speaker instanceof HTMLElement)) {
    return;
  }

  // speaker.classList.add('speaker-speak');

  await new Promise((resolve) => {
    audio.addEventListener('ended', resolve);
  });

  speaker.classList.remove('speaker-speak');
  isPlaying = false;
}

export function speakerButtonHandler() {
  let isOffSpeak = false;
  const speakerButton = document.querySelector('.speaker-button');
  if (!speakerButton) {
    return;
  }
  if (speakerButton.classList.contains('button-off')) {
    speakerButton.classList.remove('button-off');
    const speaker = document.querySelector('.speaker');
    if (speaker instanceof HTMLElement) {
      speaker.classList.add('appearing');
    }
    isOffSpeak = false;
  } else {
    speakerButton.classList.add('button-off');
    const speaker = document.querySelector('.speaker');
    if (speaker instanceof HTMLElement) {
      speaker.classList.remove('appearing');
    }
    isOffSpeak = true;
  }

  const isOffSpeakString = JSON.stringify(isOffSpeak);
  localStorage.setItem('isOffSpeak', isOffSpeakString);
}
