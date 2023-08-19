import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, switchMap } from 'rxjs';
import { BlogPost } from 'src/app/shared/model/blog';
import { BlogState } from 'src/app/core/store/state/blog.state';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  @Select(BlogState.blogPost)blogPost$!: Observable<BlogPost>;
  constructor(private route: ActivatedRoute, private router: Router, private store: Store) {
  }

  ngOnInit(): void {
  }

  navigateBack() : void{
    this.router.navigate(['..', 'blog']);
  }

}
