import { Component, Inject, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    @Inject(LOCALE_ID) public activeLocale: string
  ) {}

  title = 'i18n-demo';

  onChangeLanguage(key: string): void {
    window.location.href= `/${this.activeLocale}`;
  }
}
