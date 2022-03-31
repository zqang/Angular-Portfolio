import { Blog } from "../../model/blog";

export class GetBlogData {
  static readonly type = '[Blog] Get Blog Data';
  constructor(public payload: Blog){}
}

export class UpdateBlogData {
  static readonly type = '[Blog] Update Blog Data';
  constructor(public payload: Blog){}
}

export class DeleteBlogData {
  static readonly type = '[Blog] Delete Blog Data';
  constructor(public payload: Blog){}
}

export class AddBlogData {
  static readonly type = '[Blog] Add Blog Data';
  constructor(public payload: Blog){}
}
