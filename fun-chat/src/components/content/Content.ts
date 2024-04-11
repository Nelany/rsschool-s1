import { Tag } from '../tag/Tag';
import './Content.scss';

export const ContentTemplate = {
  draw() {
    document.body.innerHTML = '';
    Tag.draw('.body', {
      classes: 'content',
    });
  },
};
