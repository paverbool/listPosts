import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule}    from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule}   from '@angular/router';
import {HttpModule}    from '@angular/http';
import {MaterialModule} from '@angular/material';

import {PostService} from './post.service';
import {PostComponent} from './post/post.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {ListPostsComponent} from './list-posts/list-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    EditPostComponent,
    ListPostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full'
      },
      {
        path: 'posts',
        component: ListPostsComponent
      },
      {
        path: 'post/:id',
        component: PostComponent
      },
      {
        path: 'edit/:id',
        component: EditPostComponent
      }
    ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
