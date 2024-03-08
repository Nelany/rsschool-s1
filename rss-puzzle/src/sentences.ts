function wordClickHandler(lineElement: HTMLElement, fieldElement: HTMLElement) {
  const words = lineElement.querySelectorAll('.word');

  words.forEach((word) => {
    word.addEventListener('click', () => {
      const cell = fieldElement.querySelector('.cell');
      const selectedWord = word.cloneNode(true) as HTMLDivElement;

      if (cell) {
        cell.innerHTML = selectedWord.innerHTML;
        cell.className = selectedWord.className;
        cell.setAttribute('style', selectedWord.getAttribute('style') || '');
        word.remove();
      }
    });
  });
}

export function sentenceHandler(sentence: string) {
  const wordsArray = sentence.split(' ');

  const shuffledWords = [...wordsArray];

  const lineElement = document.querySelector('.line');
  const fieldElement = document.querySelector('.field');

  // const totalLetters = wordsArray.join('').length;

  for (let i = 0; i < wordsArray.length; i += 1) {
    const newDiv = document.createElement('div');

    const randomIndex = Math.floor(Math.random() * shuffledWords.length);

    const word = shuffledWords[randomIndex];
    newDiv.textContent = word;
    newDiv.classList.add('word');

    // const lettersInWord = word.length;
    // const widthPercentage = (lettersInWord / totalLetters) * 100;
    // newDiv.style.width = `${widthPercentage}%`;

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
