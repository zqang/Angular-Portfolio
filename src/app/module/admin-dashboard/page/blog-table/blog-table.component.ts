import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription, tap } from 'rxjs';
import { BlogPost } from 'src/app/shared/model/blog';
import { BlogState } from 'src/app/core/store/state/blog.state';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteBlogPost, GetBlogPost, GetBlogPosts, SetAreBlogsLoaded } from 'src/app/core/store/action/blog.action';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-blog-table',
  templateUrl: './blog-table.component.html',
  styleUrls: ['./blog-table.component.scss']
})
export class BlogTableComponent implements OnInit {

  @Select(BlogState.blogPosts)blogPosts$!: Observable<BlogPost[]>;
  @Select(BlogState.areBlogsLoaded) areBlogsLoaded$! : Observable<boolean>;

  areBlogsLoadedSub!: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService
    ){}

  ngOnInit(): void {
    this.areBlogsLoadedSub = this.areBlogsLoaded$.pipe(
      tap((areBlogsLoaded) => {
        if (!areBlogsLoaded) {
          this.store.dispatch(new GetBlogPosts());
        }
      })
    ).subscribe(value => {
      console.log('done loaded', value);
    })
  }

  ngOnDestroy() {
    this.areBlogsLoadedSub.unsubscribe();
    this.store.dispatch(new SetAreBlogsLoaded(false)); //check if got any error or not
  }


  onNavigate(id? : string): void {
    if(!id){
      this.router.navigate(['create'], {relativeTo: this.route});
    }else{
      this.router.navigate([`edit/${id}`], {relativeTo: this.route});
      this.store.dispatch(new GetBlogPost(id));
    }
  }

  deleteBlogPost(index : number) : void{
    this.modal.confirm({
      nzTitle: 'Are you sure delete this blog post?',
      // nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.store.dispatch([new DeleteBlogPost(index), new GetBlogPosts()]).subscribe(
        () => window.location.reload()),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
      nzCentered : true
    });


  }

}
