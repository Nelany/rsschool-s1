import './Popup.scss';

export const Popup = {
  draw() {
    const template = `<div class="popup">
        <div class="popup__text">
        <h5 class="popup__tittle popup__name">Lamborghini Aventador</h5>
        <h5 class="popup__tittle">went first!</h5>
        <h5 class="popup__tittle popup__time">(1.11s)</h5>
      </div>`;

    document.body.insertAdjacentHTML('beforeend', template);
  },

  open(id: number, time: number) {
    const popup = document.querySelector('.popup');
    const nameElement = document.querySelector('.popup__name');
    const timeElement = document.querySelector('.popup__time');
    const carName = document.querySelector(`[data-id="name-${id}"]`);

    if (!nameElement || !timeElement || !popup || !carName) {
      return;
    }

    nameElement.textContent = carName.textContent;
    timeElement.textContent = `(${time}s)`;
    popup.classList.add('open');
  },

  close() {
    const popup = document.querySelector('.popup');
    popup?.classList.remove('open');
  },
};
