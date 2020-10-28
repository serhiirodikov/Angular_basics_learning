import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() onRemove = new EventEmitter<number>();

  removePost() {
    this.onRemove.emit(this.post.id);
  }
  ngOnInit(): void {}
}
