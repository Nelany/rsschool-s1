import News from './news/news';
import Sources from './sources/sources';
import { Everything, Sources as SourcesInterface } from '../../types/api';

export class AppView {
    private news: News;
    private sources: Readonly<Sources>;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Everything) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesInterface) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
