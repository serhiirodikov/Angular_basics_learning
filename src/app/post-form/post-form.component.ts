import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @Output() addPos: EventEmitter<Post> = new EventEmitter<Post>();
  title = '';
  text = '';

  constructor() {}

  ngOnInit(): void {}

  addPost(): void {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };
      this.addPos.emit(post);
      console.log('New Post', post);
      this.title = this.text = '';
    }
  }
}
