import { State, Selector, StateContext, Action } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AddBlogPost, DeleteBlogPost, GetBlog, GetBlogList, GetBlogPost, GetBlogPosts, SetAreBlogsLoaded, UpdateBlogPost } from '../action/blog.action';
import { Blog, BlogPost, BlogPost_Defaults, Blog_Defaults } from 'src/app/shared/model/blog';
import { BlogService } from 'src/app/shared/service/blog.service';


export interface BlogStateModel {
  blogs: Blog[];
  blogPosts: BlogPost[];
  areBlogsLoaded: boolean;
  blogPost: BlogPost;
  blog: Blog;
}

export const blogStateDefaults: BlogStateModel = {
  blogs: [],
  blogPosts: [],
  areBlogsLoaded: false,
  blog: Blog_Defaults,
  blogPost: BlogPost_Defaults
};

@State<BlogStateModel>({
  name: 'blog',
  defaults: blogStateDefaults,
})
@Injectable()
export class BlogState {

  @Selector()
  static blog(state: BlogStateModel): Blog{
    return state.blog;
  }

  @Selector()
  static blogs(state: BlogStateModel): Blog[]{
    return state.blogs;
  }

  @Selector()
  static blogPost(state: BlogStateModel): BlogPost{
    return state.blogPost;
  }

  @Selector()
  static blogPosts(state: BlogStateModel): BlogPost[]{
    return state.blogPosts;
  }

  @Selector()
  static areBlogsLoaded(state: BlogStateModel): boolean {
      return state.areBlogsLoaded;
  }

  constructor(private blogService: BlogService) {}

  @Action(GetBlogList)
    getBlogs({getState, setState}: StateContext<BlogStateModel>) {
      return this.blogService.getBlogs().pipe(
        tap(result => {
          const state = getState();
          setState({
            ...state,
            blogs: result,
            areBlogsLoaded: true,
          });
        })
      );
    }

  @Action(GetBlog)
  getBlog({getState, setState}: StateContext<BlogStateModel>, action: GetBlog) {
    const state = getState();
    setState({
      ...state,
      blog: state.blogs.filter((data) => { return data.id === action.payload})[0]
    })
  }


  @Action(GetBlogPosts)
  getBlogPosts({getState, setState}: StateContext<BlogStateModel>) {
    return this.blogService.getBlogPosts().pipe(
      tap((result : BlogPost[])=> {
        const state = getState();
        setState({
          ...state,
          blogPosts: result,
          areBlogsLoaded: true,
        });
      })
    );
  }

  @Action(GetBlogPost)
  getBlogPost({getState, setState}: StateContext<BlogStateModel>, action: GetBlogPost) {
    const state = getState();
    setState({
      ...state,
      blogPost: state.blogPosts.filter((data) => { return data.id.toString() === action.payload})[0]
    })
  }

  @Action(SetAreBlogsLoaded)
  setAreBlogsLoaded({getState, setState}: StateContext<BlogStateModel>, action: SetAreBlogsLoaded) {
    const state = getState();
    setState({
      ...state,
      areBlogsLoaded: action.payload
    })
  }

  @Action(AddBlogPost)
  addBlogPost({getState, patchState}: StateContext<BlogStateModel>, action: AddBlogPost) {
    const state = getState();
    return this.blogService.createBlogPost(action.payload).pipe(
      tap((result: any) => {
        console.log(result);
        patchState({
          blogPosts: [...state.blogPosts, action.payload]
        });
      })
      );
    }

  @Action(UpdateBlogPost)
  updateBlogPost({getState, patchState}: StateContext<BlogStateModel>, action: UpdateBlogPost) {
    const state = getState();
    return this.blogService.updateBlogPost(action.payload).pipe(
      tap((result: any) => {
        console.log(result);
        patchState({
          blogPosts: [...state.blogPosts.filter(
            (value: BlogPost) => value.id !== action.payload.id), action.payload]
        });
      })
      );
    }

  @Action(DeleteBlogPost)
  deleteBlogPost({getState, patchState}: StateContext<BlogStateModel>, action: DeleteBlogPost) {
    const state = getState();
    return this.blogService.deleteBlogPost(action.payload).pipe(
      tap((result: any) => {
        console.log(result);
        patchState({
          blogPosts: state.blogPosts.filter((value: BlogPost) => value.id !== action.payload)
        });
      })
      );
    }
}
