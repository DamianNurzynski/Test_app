import {Component, OnInit} from '@angular/core';
import {ApiService} from '../core/services/api.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.apiService.get('/photos').then(data => {
            console.log(data);
        });
    }

}
