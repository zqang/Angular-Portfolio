import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog';

const URL = 'http://localhost:44305/api';

@Injectable({
  providedIn: 'root'
})
export class BlogEditService {

  constructor(private http: HttpClient) { }

  getBlog(){
    return this.http.get(`${URL}/blog`);
  }

  updateBlog(blog: Blog){
    return this.http.post(`${URL}/blog`, blog);
  }


}
