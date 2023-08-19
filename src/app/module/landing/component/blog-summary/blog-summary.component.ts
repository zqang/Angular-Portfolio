import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription, tap } from 'rxjs';
import { GetBlogList } from 'src/app/core/store/action/blog.action';
import { BlogState } from 'src/app/core/store/state/blog.state';
import { BASE_URL } from 'src/app/shared/constant/url.constants';
import { Blog } from 'src/app/shared/model/blog';

@Component({
  selector: 'app-blog-summary',
  templateUrl: './blog-summary.component.html',
  styleUrls: ['./blog-summary.component.scss']
})
export class BlogSummaryComponent implements OnInit {

  @Select(BlogState.blogs)blogs$!: Observable<Blog[]>;
  @Select(BlogState.areBlogsLoaded) areBlogsLoaded$! : Observable<boolean>;

  areBlogsLoadedSub!: Subscription;

  loading: boolean = false;

  blogs: Blog[]  = [];

  baseUrl: string = BASE_URL

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.loading= true;
    this.areBlogsLoadedSub = this.areBlogsLoaded$.pipe(
      tap((areBlogsLoaded) => {
        if (!areBlogsLoaded) {
          this.store.dispatch(new GetBlogList()).subscribe(data => {
            this.blogs = data.blog.blogs.slice(0,3);
            console.log(this.blogs);
            this.loading = false;
          });
        }else{
          this.blogs$.subscribe(data => {
            this.blogs = data
            this.loading = false;
          })
        }
      })
    ).subscribe(value => {
      console.log('done loaded', value);
    })
  }

  ngOnDestroy() {
    this.areBlogsLoadedSub.unsubscribe();
  }



}
