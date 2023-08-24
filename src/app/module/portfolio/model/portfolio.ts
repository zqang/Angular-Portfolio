// export interface Portfolio {
//   href: string;
//   title: string;
//   avatar: string;
//   description: string;
//   content: string;
// }

export interface Portfolio {
  id?: string,
  date?: string,
  name?: string,
  description?: string,
  body?: string,
  image?: string,
  thumbnail_text?: string,
  thumbnail_image?: string,
  is_active?: boolean
};

export const Portfolio_Defaults: Portfolio = {
  id : '',
  date : '',
  name : '',
  description : '',
  body : '',
  image : '',
  thumbnail_text : '',
  thumbnail_image : '',
  is_active: true
}