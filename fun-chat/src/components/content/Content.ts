import { Tag } from '../tag/Tag';
import './Content.scss';

export const ContentTemplate = {
  draw() {
    Tag.draw('.body', {
      classes: 'content',
    });
  },
};
