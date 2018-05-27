import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  langs = this.translate.langs;

  constructor(private translate: TranslateService) {
    // console.log(this.langs);
  }

  ngOnInit() {
  }

  changeLanguage(language) {
    this.translate.use(language);
    window.sessionStorage['language'] = language;
  }
}
