import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';


import {PostService} from '../post.service'
import {Post} from '../Post';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html'
})
export class EditPostComponent implements OnInit {
  post: Post;

  constructor(private postService: PostService,
              private location: Location,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    this.route.params
      .switchMap((params: Params) => this.postService.getPost(+params['id']))
      .subscribe(post => this.post = post);
  }

  back(): void {
    this.location.back();
  }

  save(): void {
    this.postService.savePost(this.post)
      .then(resp => this.router.navigate([`/post/${this.post.id}`]))
  }

}
