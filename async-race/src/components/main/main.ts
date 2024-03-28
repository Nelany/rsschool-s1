import './Main.scss';

export const Main = {
  template: `<main class="main">
  <div class="main__tittles">
    <h2 class="main__page-tittle">Garage (<span class="main__cars-number">6</span>)</h2>
    <h3 class="main__page-number-text">Page #<span class="main__page-number">1</span></h3>
  </div>

  <div class="main__content"></div>
</main>`,

  draw() {
    const content = document.querySelector('.content');
    if (!(content instanceof HTMLElement)) {
      return;
    }
    content.insertAdjacentHTML('beforeend', Main.template);
  },
};
