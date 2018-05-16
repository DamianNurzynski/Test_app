import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {LoaderService} from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient, private loaderService: LoaderService) {
    }


    async get(path: string, params: HttpParams = new HttpParams()): Promise<any> {
        this.showLoader();
        const data = await this.http.get(`${environment.api_url}${path}`, {params}).toPromise();
        this.hideLoader();

        return data;
    }

    put(path: string, body: Object = {}) {
        return this.http.put(
            `${environment.api_url}${path}`,
            JSON.stringify(body)
        );
    }

    post(path: string, body: Object = {}) {
        return this.http.post(
            `${environment.api_url}${path}`,
            JSON.stringify(body)
        );
    }

    delete(path) {
        return this.http.delete(
            `${environment.api_url}${path}`
        );
    }

    private showLoader() {
        console.log('show');
        this.loaderService.show();
    }

    private hideLoader() {
        console.log('hide');
        this.loaderService.hide();
    }

    private onEnd() {
        this.hideLoader();
    }

    private onError(error) {
        console.log(error);
    }
}
