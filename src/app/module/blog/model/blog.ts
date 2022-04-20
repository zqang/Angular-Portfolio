// export interface Blog {
//   href: string;
//   title: string;
//   avatar: string;
//   description: string;
//   content: string;
// }

export interface Blog {
  id?: string,
  timestamp?: string,
  author?: string,
  name?: string,
  description?: string,
  body?: string,
  image?: string,
  thumbnail_text?: string,
  thumbnail_image?: string,
  is_active?: boolean,
}

export const Blog_Defaults: Blog = {
  id: '',
  timestamp: '',
  author: '',
  name: '',
  description: '',
  body: '',
  image: '',
  thumbnail_text : '',
  thumbnail_image : '',
  is_active: true,
}
