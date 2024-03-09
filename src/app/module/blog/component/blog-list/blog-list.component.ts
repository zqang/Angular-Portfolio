import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription, tap } from 'rxjs';
import {
  GetBlogPost,
  GetBlogPosts,
  SetAreBlogsLoaded,
} from 'src/app/core/store/action/blog.action';
import { BlogState } from 'src/app/core/store/state/blog.state';
import { BlogPost } from 'src/app/shared/model/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  // @Select(BlogState.blogs)blogs$!: Observable<Blog[]>;
  @Select(BlogState.blogPosts) blogPosts$!: Observable<BlogPost[]>;
  @Select(BlogState.areBlogsLoaded) areBlogsLoaded$!: Observable<boolean>;
  public isEmptyBlogPosts: boolean = false;

  areBlogsLoadedSub!: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.areBlogsLoadedSub = this.areBlogsLoaded$
      .pipe(
        tap((areBlogsLoaded) => {
          if (!areBlogsLoaded) {
            this.store.dispatch(new GetBlogPosts());
          }
        })
      )
      .subscribe();

    this.blogPosts$.subscribe((blogPosts: BlogPost[]) => {
      this.isEmptyBlogPosts = blogPosts != null && blogPosts.length == 0;
    });
  }

  ngOnDestroy() {
    this.areBlogsLoadedSub.unsubscribe();
    this.store.dispatch(new SetAreBlogsLoaded(false)); //check if got any error or not
  }

  onNavigateBlog(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
    this.store.dispatch(new GetBlogPost(id));
  }
}
