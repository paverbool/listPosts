import {Injectable} from '@angular/core';
import {Post} from './Post';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
  post: Post;
  private rootUrl = 'http://jsonplaceholder.typicode.com';
  private postsUrl = `${this.rootUrl}/posts`;

  constructor(private http: Http) {
  }

  getPosts(): Promise<Post[]> {
    return this.http.get(this.postsUrl)
      .toPromise()
      .then(response => response.json() as Post[]);
  }

  getPost(id: number): Promise<Post> {
    return this.http.get(`${this.postsUrl}/${id}`)
      .toPromise()
      .then(response => response.json() as Post);
  }

  savePost(post: Post): Promise<Post> {
    return this.http
      .put(`${this.postsUrl}/${post.id}`, JSON.stringify(post))
      .toPromise()
      .then(resp => resp)
  }
}
