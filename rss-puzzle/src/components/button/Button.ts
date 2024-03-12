import './Button.css';

interface TemplateParams {
  text: string;
  classes: string;
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
    return `<button class="button ${params.classes}" id="${params.id}" ${params.isSubmit ? 'type="submit"' : ''}>${params.text}</button>`;
  },

  draw(parent: HTMLElement, templateParams: TemplateParams, listenerParams?: ListenerParams) {
    parent.insertAdjacentHTML('beforeend', Button.template(templateParams));
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
