import {Component, OnInit} from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {PostService} from '../post.service'
import {Post} from '../Post'

@Component({
  selector: 'post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private postService: PostService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params
      .switchMap((params: Params) => this.postService.getPost(+params['id']))
      .subscribe(post => this.post = post);

  }

}
