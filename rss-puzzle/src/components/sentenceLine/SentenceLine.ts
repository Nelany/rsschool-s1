import { sentenceHandler } from './SentenceLineService';
import './SentenceLine.css';

const currentSentence = 'The students agree they have too much homework';

export const SentenceLine = {
  template: `<div class="line"></div>`,
  draw(parent: HTMLElement) {
    parent.insertAdjacentHTML('beforeend', SentenceLine.template);
    sentenceHandler(currentSentence);
  },
};
