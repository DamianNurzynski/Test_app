import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'languageTranslate'
})
export class LanguageTranslatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 'pl':
        return 'polski';
      case 'en':
        return 'english';
    }
  }

}
