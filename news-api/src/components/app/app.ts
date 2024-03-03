import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { updateCheckedStatus } from '../view/sources/sources';

class App {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const currentSources = document.querySelector('.sources');

        if (currentSources instanceof HTMLElement) {
            currentSources.addEventListener('click', (event) => {
                if (event.target instanceof HTMLElement && event.target.closest('.mark')) {
                    markChanel(event.target);
                    return;
                }

                this.controller.getNews(event, (data) => {
                    if (data && 'articles' in data) {
                        return this.view.drawNews(data);
                    }
                });
            });
            this.controller.getSources((data) => {
                if (data && 'sources' in data) {
                    return this.view.drawSources(data);
                }
            });
        }
        toggleMyNews();
    }
}

function markChanel(eTarget: HTMLElement) {
    eTarget.classList.toggle('checked');
    const elId: HTMLElement | null = eTarget.closest('[data-source-id]');
    if (elId !== null) {
        if (eTarget.classList.contains('checked')) {
            const dataSourceId = elId.getAttribute('data-source-id');

            const selectedChannels = JSON.parse(localStorage.getItem('selectedChannels') || 'false') || [];

            if (!selectedChannels.includes(dataSourceId)) {
                selectedChannels.push(dataSourceId);
            }

            localStorage.setItem('selectedChannels', JSON.stringify(selectedChannels));
        } else {
            const dataSourceId = elId.getAttribute('data-source-id');

            const selectedChannels = JSON.parse(localStorage.getItem('selectedChannels') || 'false') || [];

            const updatedChannels = selectedChannels.filter((id: string) => id !== dataSourceId);

            localStorage.setItem('selectedChannels', JSON.stringify(updatedChannels));

            const onlyMyChannels = JSON.parse(localStorage.getItem('onlyMyChannels') || 'false');
            if (onlyMyChannels) {
                const item = eTarget.closest('.source__item');
                if (item) {
                    item.classList.add('disabled');
                }
            }
        }
    }
}

function toggleMyNews() {
    const myNews = document.querySelector('.my-news');
    let onlyMyChannels = JSON.parse(localStorage.getItem('onlyMyChannels') || 'false');

    if (myNews && onlyMyChannels) {
        myNews.classList.add('all-news');
        myNews.textContent = 'All news';
    }

    if (myNews instanceof HTMLElement) {
        myNews.addEventListener('click', () => {
            if (myNews.classList.contains('all-news')) {
                myNews.classList.remove('all-news');
                myNews.textContent = 'My news';
                onlyMyChannels = false;
            } else {
                myNews.classList.add('all-news');
                myNews.textContent = 'All news';
                onlyMyChannels = true;
            }
            localStorage.setItem('onlyMyChannels', JSON.stringify(onlyMyChannels));
            updateCheckedStatus();
        });
    }
}

export default App;
