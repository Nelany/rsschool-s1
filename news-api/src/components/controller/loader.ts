import { ApiOptions, Callback, ResponseOptions, ResponseParam, Everything, Sources } from '../../types/index';
class Loader {
    baseLink: string | undefined;
    options: ApiOptions;
    constructor(baseLink: string | undefined, options: ApiOptions) {
        if (baseLink) {
            this.baseLink = baseLink;
        }
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: ResponseParam,
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: ResponseOptions, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof ResponseOptions]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: Callback<undefined | Sources | Everything>, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
