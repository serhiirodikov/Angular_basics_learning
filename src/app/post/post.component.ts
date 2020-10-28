import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() removePos = new EventEmitter<number>();

  removePost(): void {
    this.removePos.emit(this.post.id);
  }
  ngOnInit(): void {}
}
