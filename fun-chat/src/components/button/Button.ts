import './Button.scss';

interface TemplateParams {
  text: string;
  classes: string;
  selectorForId?: string;
  id?: string;
  isSubmit?: boolean;
}
interface ListenerParams {
  type: string;
  selector: string;
  handler: (event: Event) => void;
}

export const Button = {
  template(params: TemplateParams) {
    return `<button class="button ${params.classes}" ${params.isSubmit ? 'type="submit"' : ''}>${params.text}</button>`;
  },

  draw(parent: string, templateParams: TemplateParams, listenerParams?: ListenerParams) {
    const parentElement = document.querySelector(`${parent}`);
    if (!(parentElement instanceof HTMLElement)) {
      return;
    }
    parentElement.insertAdjacentHTML('beforeend', Button.template(templateParams));
    if (templateParams.id && templateParams.selectorForId) {
      const button = document.querySelector(templateParams.selectorForId);
      if (button) {
        button.id = templateParams.id;
      }
    }
    if (listenerParams) {
      Button.addListeners(listenerParams);
    }
  },

  addListeners: (listenerParams: ListenerParams) => {
    const button = document.querySelector(listenerParams.selector);
    if (button) {
      button.addEventListener(listenerParams.type, listenerParams.handler);
    }
  },
};
