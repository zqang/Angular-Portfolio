import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { Blog } from "../../model/blog";

export interface BlogEditStateModel {
  blogs: Blog[];
}

const blogEditStateDefaults: BlogEditStateModel = {
  blogs: [],
};

@State<BlogEditStateModel>({
  name: 'blog',
  defaults: blogEditStateDefaults,
})
@Injectable()
export class BlogEditState{


}
