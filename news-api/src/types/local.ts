export interface ApiOptions {
    apiKey?: string;
}

export interface ResponseOptions {
    sources?: string;
}

export interface ResponseParam {
    endpoint: string;
    options: ResponseOptions;
}

export type Callback<T> = (data: T) => void;
