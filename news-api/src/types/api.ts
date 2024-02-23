export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export type Sources = Pick<Endpoints, 'status' | 'sources'>;

export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export type Everything = Pick<Endpoints, 'status' | 'totalResults' | 'articles'>;

interface Endpoints {
    status: string;
    sources: Source[];
    totalResults: number;
    articles: Article[];
}
