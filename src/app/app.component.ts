import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private translateService: TranslateService, private router: Router) {
    }

    ngOnInit() {
        this.router.events.subscribe(evt => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scroll(0, 0);
        });
    }
}
