import './news.css';
import { Article } from '../../../types/index';

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item, idx: number) => {
            if (newsItemTemp !== null) {
                const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

                if (idx % 2) {
                    newsClone.querySelector('.news__item')?.classList.add('alt');
                }
                const photo = newsClone.querySelector<HTMLElement>('.news__meta-photo');
                if (photo !== null) {
                    photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }

                const author = newsClone.querySelector<HTMLElement>('.news__meta-author');
                if (author !== null) {
                    author.textContent = item.author || item.source.name;
                }

                const date = newsClone.querySelector<HTMLElement>('.news__meta-date');
                if (date !== null) {
                    date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }

                const title = newsClone.querySelector<HTMLElement>('.news__description-title');
                if (title !== null) {
                    title.textContent = item.title;
                }
                const source = newsClone.querySelector<HTMLElement>('.news__description-source');
                if (source !== null) {
                    source.textContent = item.source.name;
                }
                const content = newsClone.querySelector<HTMLElement>('.news__description-content');
                if (content !== null) {
                    content.textContent = item.description;
                }
                const moreA = newsClone.querySelector<HTMLElement>('.news__read-more a');
                if (moreA !== null) {
                    moreA.setAttribute('href', item.url);
                }

                fragment.append(newsClone);
            }
        });

        const newsEl = document.querySelector<HTMLElement>('.news');
        if (newsEl !== null) {
            newsEl.innerHTML = '';
            newsEl.appendChild(fragment);
        }
    }
}

export default News;
