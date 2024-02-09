import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public languages: string[] = ['en', 'fr', 'es'];
  language = "language";

  constructor(public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document) {
      const localStorage = document.defaultView?.localStorage;
      let browserLang: any;
      translate.addLangs(this.languages);

      console.log(localStorage?.getItem(this.language));
      if (localStorage?.getItem(this.language)) {
        browserLang = localStorage.getItem(this.language);
      } else {
        browserLang = translate.getBrowserLang();
      }
      translate.use(this.getLanguage(browserLang) ? browserLang : 'en');
  }

  private getLanguage(browserLang: string): string | null {
    if(browserLang ==="en") {
        return "en"
    } else if(browserLang ==="fr") {
      return "fr"
    } else if(browserLang ==="es") {
      return "es"
    } else {
      return null;
    } 
  }

  public setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem(this.language, lang);
  }

}
