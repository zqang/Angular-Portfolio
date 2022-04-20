import { State, Selector, StateContext, Action } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Blog, Blog_Defaults } from '../../model/blog';
import { BlogRestService } from '../../service/blog-rest.service';
import { GetBlog, GetBlogList, SetAreBlogsLoaded } from '../action/blog.action';


export interface BlogStateModel {
  blogs: Blog[];
  areBlogsLoaded: boolean;
  blog: Blog;
}

const blogStateDefaults: BlogStateModel = {
  blogs: [],
  areBlogsLoaded: false,
  blog: Blog_Defaults,
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
  static areBlogsLoaded(state: BlogStateModel): boolean {
      return state.areBlogsLoaded;
  }

  constructor(private blogService: BlogRestService) {}

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
  getPortfolio({getState, setState}: StateContext<BlogStateModel>, action: GetBlog) {
    const state = getState();
    setState({
      ...state,
      blog: state.blogs.filter((data) => { return data.id === action.payload})[0]
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
}
