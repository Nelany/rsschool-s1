import { sentenceHandler } from './sentences';

const currentSentence = 'The students agree they have too much homework';

export function createMainPage() {
  const contentElement = document.querySelector('.content');
  if (contentElement) {
    contentElement.classList.add('content-fadeout');
    const mainHTML = `
  <div class="content content-fadeout main-content">
  <div class="field"></div>
  <div class="line"></div>
  </div>
`;
    setTimeout(() => {
      document.body.innerHTML = mainHTML;
      sentenceHandler(currentSentence);
    }, 1000);
  }
}
