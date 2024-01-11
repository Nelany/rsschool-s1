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

  // Фун.для создания HTML.______________________________________________________________________________
function createHTML() {
  const body = document.querySelector('.body');
  body.innerHTML = "";
  // Создаем элементы. Параметры: createHTMLEl(tagName, parentElementName, classes, textContent, attributes);
  createHTMLEl('div', '.body', 'content');
  createHTMLEl('aside', '.content', 'aside');
  createHTMLEl('div', '.aside', 'aside__img-container');

  const imgSrcArray = [
    'gallows.svg',
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
      `aside__img-${name} aside__img--small`,
      null,
      { src: `./assets/${src}`, alt: name }
    );
  });

  createHTMLEl('h2', '.aside', 'aside__tittle', 'HANGMAN GAME');
  createHTMLEl('main', '.content', 'main');
  createHTMLEl('div', '.main', 'word');
  createHTMLEl('div', '.main', 'hint', 'Hint:');
  createHTMLEl('span', '.hint', 'hint__text');
  createHTMLEl('div', '.main', 'mistakes', 'Incorrect guesses:');
  createHTMLEl('span', '.mistakes', 'mistakes__number', '0', { id: 'number' });
  createHTMLEl('span', '.mistakes', 'mistakes__number', '/ 6');
  createHTMLEl('div', '.main', 'alphabet');

  for (let i = 97; i <= 122; i += 1) {
    createHTMLEl(
      'div',
      '.alphabet',
      'alphabet__letter',
      String.fromCharCode(i)
    );
  }

  createHTMLEl('div', '.body', 'popup');
  createHTMLEl('div', '.popup', 'popup__content');
  createHTMLEl('h2', '.popup__content', 'popup__result', 'You Win!');
  createHTMLEl('h3', '.popup__content', 'popup__answer-text', 'The answer is:');
  createHTMLEl('span', '.popup__answer-text', 'popup__answer');
  createHTMLEl('button', '.popup__content', 'popup__button', 'play again');
}
// параметры: createHTMLEl(tagName, parentElementName, classes, textContent, attributes);

createHTML();
