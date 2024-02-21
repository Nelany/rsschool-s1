import './sources.css';
import type { Source } from '../../../types/index';

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        data.forEach((item) => {
            if (sourceItemTemp !== null) {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

                const itemName = sourceClone.querySelector<HTMLElement>('.source__item-name');
                if (itemName !== null) {
                    itemName.textContent = item.name;
                }
                const itemEl = sourceClone.querySelector<HTMLElement>('.source__item');
                if (itemEl !== null) {
                    itemEl.setAttribute('data-source-id', item.id);
                }

                fragment.append(sourceClone);
            }
        });

        const sourcesEl = document.querySelector<HTMLElement>('.sources');
        if (sourcesEl !== null) {
            sourcesEl.append(fragment);
        }
    }
}

export default Sources;
