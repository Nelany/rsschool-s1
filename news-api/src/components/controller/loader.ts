import { ApiOptions, Callback, ResponseOptions, ResponseParam, Everything, Sources } from '../../types/index';
class Loader {
    private baseLink: string | undefined;
    private options: Partial<ApiOptions>;
    constructor(baseLink: string | undefined, options: Partial<ApiOptions>) {
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

    private errorHandler(res: Response) {
        enum ResStatus {
            status1 = 401,
            status2 = 404,
        }
        if (!res.ok) {
            if (res.status === ResStatus.status1 || res.status === ResStatus.status2)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Partial<ResponseOptions>, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof Partial<ResponseOptions>]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method: string, endpoint: string, callback: Callback<undefined | Sources | Everything>, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
