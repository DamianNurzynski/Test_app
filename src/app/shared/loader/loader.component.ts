import {Component, OnInit} from '@angular/core';
import {LoaderService} from '../../core/services';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
    show = false;

    constructor(private loaderService: LoaderService) {
        this.loaderService.loaderState.subscribe(state => {
            this.show = state;
        });

    }

    ngOnInit() {
    }
}
