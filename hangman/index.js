let wordLettersArray;
let alphabetArray;
let errors = 0;
let human;
let restartButton;
let alphabet;
let stopClicks = false;
let lastRiddle;
let riddleNumber = 0;

// Фун.для создания HTML-элементов.___________________________________________________________
function createHTMLEl(
  tagName,
  parentElementName,
  classes,
  textContent,
  attributes
) {
  const parentElement = document.querySelector(parentElementName);

  if (parentElement) {
    const element = document.createElement(tagName);

    if (classes) {
      element.className = classes;
    }

    if (attributes) {
      Object.keys(attributes).forEach((key) => {
        element.setAttribute(key, attributes[key]);
      });
    }

    if (textContent) {
      element.textContent = textContent;
    }

    parentElement.appendChild(element);

    return element;
  }
  return undefined;
}

// Массив загадок_____________________________________________________________________
const riddlesArray = [
  {
    question: 'What is something that can speak every language in the world?',
    answer: 'tongue',
  },

  {
    question: 'What can travel around the world while staying in a corner?',
    answer: 'stamp',
  },

  {
    question: 'What invention lets you look right through a wall?',
    answer: 'window',
  },

  {
    question:
      'What do you throw out when you want to use it, but take in when you do not want to use it?',
    answer: 'anchor',
  },

  { question: 'What thing you can never eat for breakfast?', answer: 'dinner' },

  {
    question: 'What belongs to you but others use it more than you do?',
    answer: 'name',
  },

  {
    question: 'What is so delicate that even saying its name will break it?',
    answer: 'silence',
  },

  {
    question:
      'I have keys but no locks. I have space but no room. You can enter, but you can not go inside. What am I?',
    answer: 'keyboard',
  },

  {
    question: 'The more you have of it, the less you see. What is it?',
    answer: 'darkness',
  },

  {
    question:
      'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?',
    answer: 'map',
  },

  {
    question:
      'I fly without wings. I cry without eyes. Wherever I go, darkness follows me. What am I?',
    answer: 'cloud',
  },

  {
    question:
      "What has a heart that doesn't beat, a mouth that doesn't speak, and a head that doesn't think?",
    answer: 'artichoke',
  },

  {
    question: 'I shave every day but my beard never changes. What am I?',
    answer: 'barber',
  },
];

function shuffleRiddlesArray(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffleRiddlesArray(riddlesArray);

// Фун.для выбора загадок, заполнения соответствующих элементов HTML.__________________________________

function setRiddles() {
  // const riddle = riddlesArray[Math.floor(Math.random() * riddlesArray.length)];

  if (riddleNumber === 12) {
    shuffleRiddlesArray(riddlesArray);
    riddleNumber = 0;
  } else {
    riddleNumber += 1;
  }

  const riddle = riddlesArray[riddleNumber];

  createHTMLEl('span', '.hint', 'hint__text', riddle.question);
  createHTMLEl('span', '.popup__answer-text', 'popup__answer', riddle.answer);
  console.log('%c' + riddle.answer, 'color: yellow; font-size: 15px'); // ДЛЯ ПРОВЕРКИ

  const word = riddle.answer;

  word.split('').forEach((letter) => {
    createHTMLEl('div', '.word', 'word__letter', letter);
  });

  if (lastRiddle && lastRiddle.textContent === riddle.question) {
    setRiddles();
  }

  wordLettersArray = document.querySelectorAll('.word__letter');
}

// Рисование человека____________________________________________________________
function drawHuman(errorNumber) {
  for (let i = 0; i <= human.length; i += 1) {
    if (errorNumber === i) {
      human[i].classList.add('open');
    }
  }
}

// POPUP open______________________________________________________________________________

function openPopup(text) {
  stopClicks = true;
  const popup = document.querySelector('.popup');
  popup.classList.add('open');
  const message = document.querySelector('.popup__result');
  if (text) {
    message.textContent = text;
  }
}

// Счетчик ошибок_______________________________________________________________________

function incrementErrors() {
  errors += 1;
  const mistakesNumber = document.getElementById('number');
  mistakesNumber.textContent = errors;
  drawHuman(errors);
  if (errors === 6) {
    openPopup('GAME OVER!');
    errors = 0;
  }
}

// Обработка ответов______________________________________________________________________________

function chooseLetter(letterItem) {
  let inTheWord = false;

  wordLettersArray.forEach((letter) => {
    if (letter.textContent.toLowerCase() === letterItem.toLowerCase()) {
      letter.classList.add('word__letter--open');
      inTheWord = true;
      let openLetters = 0;
      wordLettersArray.forEach((openLetter) => {
        if (openLetter.classList.contains('word__letter--open')) {
          openLetters += 1;
          if (openLetters === wordLettersArray.length) {
            openPopup();
          }
        }
      });
    }
  });

  alphabetArray.forEach((letter) => {
    if (letter.textContent.toLowerCase() === letterItem.toLowerCase()) {
      if (
        !letter.classList.contains('alphabet__letter--disabled') &&
        !inTheWord
      ) {
        incrementErrors();
      }
      letter.classList.add('alphabet__letter--disabled');
    }
  });

  inTheWord = false;
}

function chooseLetterKeyboard(event) {
  // при нажатии на клавиши клавиатуры
  if (!stopClicks) {
    chooseLetter(event.key);
  }
}

function chooseLetterVirtual(event) {
  // при нажатии на виртуальные клавиши
  if (event.target.classList.contains('alphabet__letter')) {
    chooseLetter(event.target.textContent);
  }
}

document.addEventListener('keydown', chooseLetterKeyboard);

// параметры: createHTMLEl(tagName, parentElementName, classes, textContent, attributes);

// ________________________________Фун.ДЛЯ СОЗДАНИЯ HTML.___________________________________________

function createHTML() {
  errors = 0;
  lastRiddle = document.querySelector('.hint__text');
  const body = document.querySelector('.body');
  body.innerHTML = '';
  // Создаем элементы. Параметры: createHTMLEl(tagName, parentElementName, classes, textContent, attributes);
  createHTMLEl('div', '.body', 'content');
  createHTMLEl('aside', '.content', 'aside');
  createHTMLEl('div', '.aside', 'aside__img-container');

  createHTMLEl('img', '.aside__img-container', `aside__img-gallows img`, null, {
    src: './assets/gallows.svg',
    alt: 'gallows',
  });
  const imgSrcArray = [
    'head.svg',
    'body.svg',
    'hand-one.svg',
    'hand-two.svg',
    'leg-one.svg',
    'leg-two.svg',
  ];

  imgSrcArray.forEach((src) => {
    const name = src.split('.')[0];
    createHTMLEl(
      'img',
      '.aside__img-container',
      `aside__img-${name} aside__img--small img`,
      null,
      { src: `./assets/${src}`, alt: name }
    );
  });

  human = document.querySelectorAll('.img');

  createHTMLEl('h2', '.aside', 'aside__tittle', 'HANGMAN GAME');
  createHTMLEl('main', '.content', 'main');
  createHTMLEl('div', '.main', 'word');
  createHTMLEl('div', '.main', 'hint', 'Hint: ');
  createHTMLEl('div', '.main', 'mistakes', 'Incorrect guesses: ');
  createHTMLEl('span', '.mistakes', 'mistakes__number', '0', { id: 'number' });
  createHTMLEl('span', '.mistakes', 'mistakes__number', ' / 6');
  createHTMLEl('div', '.main', 'alphabet');
  alphabet = document.querySelector('.alphabet');
  alphabet.addEventListener('click', chooseLetterVirtual);

  for (let i = 97; i <= 122; i += 1) {
    createHTMLEl(
      'div',
      '.alphabet',
      'alphabet__letter',
      String.fromCharCode(i)
    );
  }

  alphabetArray = document.querySelectorAll('.alphabet__letter');

  createHTMLEl('div', '.body', 'popup');
  createHTMLEl('div', '.popup', 'popup__content');
  createHTMLEl('h2', '.popup__content', 'popup__result', 'You Win!');
  createHTMLEl(
    'h3',
    '.popup__content',
    'popup__answer-text',
    'The answer is: '
  );
  createHTMLEl('button', '.popup__content', 'popup__button', 'play again');

  restartButton = document.querySelector('.popup__button');
  restartButton.addEventListener('click', createHTML);

  setRiddles();
  stopClicks = false;
}

createHTML();
console.log(
  '%cНе забудьте, пожалуйста, включить английский язык клавиатуры!',
  'color: red; font-size: 20px'
);
//________________________________________________________________________________
