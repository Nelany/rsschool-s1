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
                    addMarkToElement(itemEl);
                }

                fragment.append(sourceClone);
            }
        });

        const sourcesEl = document.querySelector<HTMLElement>('.sources');
        if (sourcesEl !== null) {
            sourcesEl.append(fragment);
        }
        updateCheckedStatus();
    }
}

function addMarkToElement(curItemEl: HTMLElement) {
    const markDiv = document.createElement('div');

    markDiv.innerHTML = '&#9733';
    markDiv.classList.add('mark');

    curItemEl.appendChild(markDiv);
}

export function updateCheckedStatus() {
    const selectedChannels = JSON.parse(localStorage.getItem('selectedChannels') || 'false') || [];

    const sourceItems = document.querySelectorAll('.source__item');

    sourceItems.forEach((item) => {
        const dataSourceId = item.getAttribute('data-source-id');

        const markElement = item.querySelector('.mark');

        const isSelected = selectedChannels.includes(dataSourceId);

        if (isSelected && markElement) {
            markElement.classList.add('checked');
        } else if (markElement) {
            markElement.classList.remove('checked');
            const onlyMyChannels = JSON.parse(localStorage.getItem('onlyMyChannels') || 'false');
            if (onlyMyChannels) {
                item.classList.add('disabled');
            } else {
                item.classList.remove('disabled');
            }
        }
    });
}

export default Sources;
