import { BlogPost } from "src/app/shared/model/blog";

export class GetBlogList {
  static readonly type = '[Blog] Get Blog List';
}

export class GetBlog{
  static readonly type = '[Blog] Get Blog Item';
  constructor(public payload: string){}
}

export class SetAreBlogsLoaded{
  static readonly type = '[Blog] Set Are Blogs Loaded';
  constructor(public payload: boolean){}
}

export class GetBlogPosts {
  static readonly type = '[Blog] Get Blog Posts';
}

export class GetBlogPost{
  static readonly type = '[Blog] Get a Blog Post';
  constructor(public payload: string){}
}


export class UpdateBlogPost {
  static readonly type = '[Blog] Update BlogPost Post';
  constructor(public payload: BlogPost){}
}

export class DeleteBlogPost {
  static readonly type = '[Blog] Delete BlogPost Post';
  constructor(public payload: number){}
}

export class AddBlogPost {
  static readonly type = '[Blog] Add BlogPost Post';
  constructor(public payload: BlogPost){}
}
