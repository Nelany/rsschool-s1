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
      classes: 'flying-butterfly butterfly-fat butterfly-purple flying-butterfly1',
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
      tag: 'img',
      classes: 'flying-butterfly butterfly-fat flying-butterfly3',
      src: './butterfly3.png',
    });

    Tag.draw('.body', {
      tag: 'img',
      classes: 'flying-butterfly butterfly-fat flying-butterfly8',
      src: './butterfly8.png',
    });

    Tag.draw('.body', {
      tag: 'img',
      classes: 'flying-butterfly butterfly-button-img chat-onn invisible',
      src: './butterfly4.png',
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

    Tag.draw('.body', {
      tag: 'div',
      classes: 'hint invisible',
      text: 'catch a butterfly!',
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
    butterfly1.className = `flying-butterfly butterfly-fat  butterfly-purple flying-butterfly1 ${randomAnimation()}`;
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

export function letFly3() {
  const butterfly3 = document.querySelector('.flying-butterfly3');

  if (butterfly3) {
    butterfly3.className = `flying-butterfly butterfly-fat flying-butterfly3 ${randomAnimation()}`;
  }
}

export function letFly8() {
  const butterfly8 = document.querySelector('.flying-butterfly8');

  if (butterfly8) {
    butterfly8.className = `flying-butterfly butterfly-fat flying-butterfly8 ${randomAnimation()}`;
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

export function scheduleLetFly3() {
  setTimeout(() => {
    letFly3();
    setInterval(letFly3, 25000);
  }, 12000);
}

export function scheduleLetFly8() {
  setTimeout(() => {
    letFly8();
    setInterval(letFly8, 25000);
  }, 14000);
}
