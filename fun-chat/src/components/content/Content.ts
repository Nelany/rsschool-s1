import { Tag } from '../tag/Tag';
import './Content.scss';

export const ContentTemplate = {
  draw() {
    document.body.innerHTML = '';
    Tag.draw('.body', {
      classes: 'content',
    });

    Tag.draw('.body', {
      tag: 'img',
      classes: 'flying-butterfly butterfly-fat flying-butterfly1',
      src: './butterfly.png',
    });

    Tag.draw('.body', {
      tag: 'img',
      classes: 'flying-butterfly butterfly-fat flying-butterfly2',
      src: './butterfly2.png',
    });

    Tag.draw('.body', {
      tag: 'img',
      classes: 'flying-butterfly flying-butterfly5',
      src: './butterfly5.png',
    });

    Tag.draw('.body', {
      tag: 'img',
      classes: 'flying-butterfly flying-butterfly6',
      src: './butterfly6.png',
    });

    Tag.draw('.body', {
      tag: 'img',
      classes: 'flying-butterfly butterfly-fat flying-butterfly7',
      src: './butterfly7.png',
    });

    Tag.draw('.body', {
      tag: 'div',
      classes: 'flowers-container',
    });

    Tag.draw('.flowers-container', {
      tag: 'img',
      classes: 'flowers',
      src: './flowers2.png',
    });
    Tag.draw('.flowers-container', {
      tag: 'img',
      classes: 'flowers',
      src: './flowers2.png',
    });
    Tag.draw('.flowers-container', {
      tag: 'img',
      classes: 'flowers',
      src: './flowers2.png',
    });
    Tag.draw('.flowers-container', {
      tag: 'img',
      classes: 'flowers',
      src: './flowers2.png',
    });

    Tag.draw('.flowers-container', {
      tag: 'img',
      classes: 'flowers',
      src: './flowers2.png',
    });
  },
};

export function randomAnimation() {
  const animations = ['animation1', 'animation2', 'animation3', 'animation4', 'animation5', 'animation6'];
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
}

export function letFly1() {
  const butterfly1 = document.querySelector('.flying-butterfly1');

  if (butterfly1) {
    butterfly1.className = `flying-butterfly butterfly-fat flying-butterfly1 ${randomAnimation()}`;
  }
}

export function letFly2() {
  const butterfly2 = document.querySelector('.flying-butterfly2');

  if (butterfly2) {
    butterfly2.className = `flying-butterfly butterfly-fat flying-butterfly2 ${randomAnimation()}`;
  }
}

export function letFly5() {
  const butterfly5 = document.querySelector('.flying-butterfly5');

  if (butterfly5) {
    butterfly5.className = `flying-butterfly flying-butterfly5 ${randomAnimation()}`;
  }
}

export function letFly6() {
  const butterfly6 = document.querySelector('.flying-butterfly6');

  if (butterfly6) {
    butterfly6.className = `flying-butterfly flying-butterfly6 ${randomAnimation()}`;
  }
}
export function letFly7() {
  const butterfly7 = document.querySelector('.flying-butterfly7');

  if (butterfly7) {
    butterfly7.className = `flying-butterfly butterfly-fat flying-butterfly7 ${randomAnimation()}`;
  }
}

export function scheduleLetFly1() {
  setTimeout(() => {
    letFly1();
    setInterval(letFly1, 25000);
  }, 2000);
}

export function scheduleLetFly2() {
  setTimeout(() => {
    letFly2();
    setInterval(letFly2, 25000);
  }, 4000);
}

export function scheduleLetFly5() {
  setTimeout(() => {
    letFly5();
    setInterval(letFly5, 25000);
  }, 6000);
}

export function scheduleLetFly6() {
  setTimeout(() => {
    letFly6();
    setInterval(letFly6, 25000);
  }, 8000);
}

export function scheduleLetFly7() {
  setTimeout(() => {
    letFly7();
    setInterval(letFly7, 25000);
  }, 10000);
}
