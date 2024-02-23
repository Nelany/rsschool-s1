import AppController from '../controller/controller';
import { AppView } from '../view/appView';

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
            currentSources.addEventListener('click', (e) =>
                this.controller.getNews(e, (data) => {
                    if (data && 'articles' in data) {
                        return this.view.drawNews(data);
                    }
                })
            );
            this.controller.getSources((data) => {
                if (data && 'sources' in data) {
                    return this.view.drawSources(data);
                }
            });
        }
    }
}

export default App;
