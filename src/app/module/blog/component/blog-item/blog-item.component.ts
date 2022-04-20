import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Blog } from '../../model/blog';
import { BlogState } from '../../store/state/blog.state';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Select(BlogState.blog)blog$!: Observable<Blog>;

  blog!: Blog;

  constructor() { }

  ngOnInit(): void {
    this.blog$.subscribe(data => {
      this.blog = data;
    })
  }

}
