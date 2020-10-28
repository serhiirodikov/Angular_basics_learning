import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggle = false;
  arr = [1, 1, 2, 3, 5, 8];
  objs = [
    {
      title: 'post1',
      author: 'Serhii',
      comments: [
        { name: 'Serhii', text: 'lorem1' },
        { name: 'Serhii', text: 'lorem1' },
        { name: 'Serhii', text: 'lorem1' },
      ],
    },
    {
      title: 'post2',
      author: 'Serhii2',
      comments: [
        { name: 'Serhii2', text: 'lorem1' },
        { name: 'Serhii2', text: 'lorem1' },
        { name: 'Serhii2', text: 'lorem1' },
      ],
    },
  ];
}
