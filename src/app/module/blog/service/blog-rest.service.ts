import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog';

const URL = 'http://127.0.0.1:8000';

@Injectable({
  providedIn: 'root'
})
export class BlogRestService {

  constructor(private http: HttpClient) { }

  getBlog(){
    return this.http.get<Blog>(`${URL}/blog`);
  }

  // updateBlog(blog: Blog){
  //   return this.http.post(`${URL}/blog`, blog);
  // }


}
