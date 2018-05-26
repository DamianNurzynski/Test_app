import {Component, OnInit} from '@angular/core';
import {ApiService} from '../core/services/api.service';

// import * as customStyles from '../../assets/maps-custom-styles.json';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    title: String = 'My first AGM project';
    lat: Number = 52.164488;
    lng: Number = 21.048775;
    zoom = 12;
    label = 'etykieta';
    visible = false;

    // customStyles = customStyles;


    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        // this.apiService.get('/photos').then(data => {
        //     console.log(data);
        // });

        setTimeout(() => {
            this.visible = true;
        }, 1000);
    }

}
