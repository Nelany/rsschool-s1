import AppLoader from './appLoader';
import { Callback, Sources, Everything } from '../../types/index';

class AppController extends AppLoader {
    getSources(callback: Callback<undefined | Sources | Everything>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(event: MouseEvent, callback: Callback<undefined | Sources | Everything>) {
        let target = event.target;
        const newsContainer = event.currentTarget;
        while (target !== newsContainer) {
            if (target instanceof HTMLElement && newsContainer instanceof HTMLElement) {
                if (target.classList.contains('source__item')) {
                    const sourceId = target.getAttribute('data-source-id');
                    if (typeof sourceId === 'string' && newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
                target = target.parentNode;
            }
        }
    }
}

export default AppController;
