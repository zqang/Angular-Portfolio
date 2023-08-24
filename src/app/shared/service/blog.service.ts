import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog, BlogPost } from '../model/blog';



@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${environment.BACKEND_URL}/BlogPosts`);
  }

  getBlogs(): Observable<any>{
    return this.http.get<Blog[]>(`${environment.BACKEND_URL}/blog`)
  }

  // getBlogPost(): Observable<BlogPost> {
  //   return this.http.get<BlogPost>(`${environment.BACKEND_URL}/BlogPosts`);
  // }

  createBlogPost(blogPost: BlogPost){
    const headers = { 'content-type': 'application/json'}
    const body= JSON.stringify(blogPost);
    return this.http.post(`${environment.BACKEND_URL}/BlogPosts`, body, {'headers': headers});
  }


  updateBlogPost(blogPost: BlogPost){
    const headers = { 'content-type': 'application/json'}
    const body= JSON.stringify(blogPost);
    return this.http.put(`${environment.BACKEND_URL}/BlogPosts`, body, {'params': {'id': blogPost.id.toString()}, 'headers': headers});
  }

  deleteBlogPost(id: number){
    return this.http.delete(`${environment.BACKEND_URL}/BlogPosts`, {params: {'id' : id.toString()}})
  }
}
