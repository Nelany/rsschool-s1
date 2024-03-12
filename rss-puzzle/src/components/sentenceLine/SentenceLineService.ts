import { SentenceLine } from './SentenceLine';
import { addLineListener } from './addLineListener';

function wordClickHandler(lineElement: HTMLElement, fieldElement: HTMLElement) {
  const lineWords = lineElement.querySelectorAll('.word');

  lineWords.forEach((word) => {
    if (word instanceof HTMLElement) {
      addLineListener(word, fieldElement, lineElement);
    }
  });
}

export function sentenceCreator(sentence: string) {
  SentenceLine.setAnswerArray([]);
  const wordsArray = sentence.split(' ');

  const shuffledWords = [...wordsArray];

  const lineElement = document.querySelector('.line');
  const fieldElement = document.querySelector('.field');

  const totalLetters = wordsArray.join('').length;

  for (let i = 0; i < wordsArray.length; i += 1) {
    const newDiv = document.createElement('div');

    const randomIndex = Math.floor(Math.random() * shuffledWords.length);

    const word = shuffledWords[randomIndex];
    newDiv.textContent = word;
    newDiv.classList.add('word');

    const lettersInWord = word.length;
    const widthPercentage = (lettersInWord / totalLetters) * 100;
    newDiv.style.width = `${widthPercentage}%`;

    shuffledWords.splice(randomIndex, 1);

    if (lineElement && fieldElement) {
      lineElement.appendChild(newDiv);
      const fieldCell = `<div class="cell"></div>`;
      fieldElement.innerHTML += fieldCell;
    }
  }
  if (lineElement instanceof HTMLElement && fieldElement instanceof HTMLElement) {
    wordClickHandler(lineElement, fieldElement);
  }
}
