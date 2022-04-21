import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription, tap } from 'rxjs';
import { BASE_URL } from 'src/app/shared/constant/url.constants';
import { Blog } from '../../model/blog';
import { GetBlog, GetBlogList, SetAreBlogsLoaded } from '../../store/action/blog.action';
import { BlogState } from '../../store/state/blog.state';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  @Select(BlogState.blogs)blogs$!: Observable<Blog[]>;
  @Select(BlogState.areBlogsLoaded) areBlogsLoaded$! : Observable<boolean>;

  areBlogsLoadedSub!: Subscription;

  baseUrl: string = BASE_URL

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.areBlogsLoadedSub = this.areBlogsLoaded$.pipe(
      tap((areBlogsLoaded) => {
        if (!areBlogsLoaded) {
          this.store.dispatch(new GetBlogList());
        }
      })
    ).subscribe(value => {
      console.log('done loaded', value);
    })
  }

  ngOnDestroy() {
    this.areBlogsLoadedSub.unsubscribe();
    // this.store.dispatch(new SetAreBlogsLoaded(false));
  }

  onNavigateBlog(id : string){
    this.router.navigate([id], {relativeTo: this.route})
    this.store.dispatch(new GetBlog(id))
  }

}
