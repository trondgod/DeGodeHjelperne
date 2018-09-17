import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class Fetchdata {
    public helpers: IHelper[] = [];

    constructor(http: HttpClient) {
        http.fetch('api/SampleData/HelpingPeople')
            .then(result => result.json() as Promise<IHelper[]>)
            .then(data => {
                this.helpers = data;
            });
    }
}

interface IHelper {
    name: string;
    relation: string;
    nextTimeFormatted: string;
    age: number;
    summary: string;
}
