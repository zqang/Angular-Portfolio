import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/app/shared/model/blog';
import { BlogState } from 'src/app/core/store/state/blog.state';

@Component({
  selector: 'app-blog-table',
  templateUrl: './blog-table.component.html',
  styleUrls: ['./blog-table.component.scss']
})
export class BlogTableComponent implements OnInit {


  @Select(BlogState.blogPosts) blogPosts$: Observable<BlogPost[]> | undefined;
  blogPosts : BlogPost[] = [];
  constructor() {
    this.blogPosts$?.subscribe((value : BlogPost[]) => this.blogPosts = value);
  }

  ngOnInit(): void {
  }

}
