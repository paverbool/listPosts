import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service'
import {Post} from '../Post'
@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html'
})
export class ListPostsComponent implements OnInit {
  listPosts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts()
      .then(response => this.listPosts = response);
  }

}
