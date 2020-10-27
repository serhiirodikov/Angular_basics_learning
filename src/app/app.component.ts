import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // img = 'https://learn.javascript.ru/courses/list/angular.png';
  inputValue = '';
  title = 'angular-first-touch';
  constructor() {
    // setTimeout(() => {
    //   this.img =
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png';
    // }, 3000);
  }
  onInput(e?) {
    this.inputValue = e.target.value;
  }
  onClick() {
    console.log('clicked');
  }
}
