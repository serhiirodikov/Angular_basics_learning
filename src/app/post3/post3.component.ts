import { Component } from '@angular/core';

@Component({
  selector: 'app-post3',
  template: `
    <div class="post3">
      <h2>Post title</h2>
      <p>lorem ispun usiah uih</p>
    </div>
  `,
  styles: [
    `
      .post3 {
        padding: 0.5rem;
        border: 2px solid black;
      }
      h2 {
        font-size: 1rem;
      }
    `,
  ],
})
export class Post3Component {}
