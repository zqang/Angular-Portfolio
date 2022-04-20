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
