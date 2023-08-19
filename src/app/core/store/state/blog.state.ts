
import { State, Selector, StateContext, Action, createSelector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BlogPost } from '../../../shared/model/blog';
import { GetBlogPosts } from '../action/blog.action';
import { BlogService } from '../../../shared/service/blog.service';

export interface BlogStateModel {
  blogPosts: BlogPost[];
}

const BlogStateDefaults: BlogStateModel = {
  blogPosts: [],
};

@State<BlogStateModel>({
  name: 'Blog',
  defaults: BlogStateDefaults,
})
@Injectable()
export class BlogState {


  @Selector()
  static blogPosts(state: BlogStateModel): BlogPost[] | null {
    return state.blogPosts;
  }

  static blogPost(index: number) {
    return createSelector([BlogState], (state: BlogStateModel) => {
      return state.blogPosts.filter((value: BlogPost) => value.id === index)[0];
    })
  }

  constructor(private blogService: BlogService) {}

  @Action(GetBlogPosts)
  GetBlogPosts(ctx: StateContext<BlogStateModel>, action: BlogPost) {
    return this.blogService.getBlogPosts().pipe(
      tap((result: BlogPost[]) => {
        ctx.setState({
          blogPosts: result
        });
      })
      );
    }
}
