export interface Blog {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

export interface BlogPost {
  id: number;
  title : string;
  content : string;
  createdAt: Date;
  updatedAt: Date;
}
