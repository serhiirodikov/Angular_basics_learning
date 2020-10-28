import { Component } from '@angular/core';
export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Angular component less', text: 'more text', id: 1 },
    { title: 'One more post', text: 'more and more texttttt', id: 2 },
  ];
  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
  removePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
