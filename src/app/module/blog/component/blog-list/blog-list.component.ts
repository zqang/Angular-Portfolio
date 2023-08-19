import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BlogPost } from 'src/app/shared/model/blog';
import { BlogState } from 'src/app/core/store/state/blog.state';
import { GetBlogPosts } from 'src/app/core/store/action/blog.action';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  @Select(BlogState.blogPosts) blogPosts$: Observable<BlogPost[]> | undefined;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(new GetBlogPosts());
  }

  navigateBlogDetail(index : number) : void {
    console.log(index);
    this.router.navigate([`/blog/${(index+1).toString()}`]);
  }
}
