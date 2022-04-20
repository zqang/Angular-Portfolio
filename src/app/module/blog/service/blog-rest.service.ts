import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog';
import { BASE_URL } from 'src/app/shared/constant/url.constants';

@Injectable({
  providedIn: 'root'
})
export class BlogRestService {

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any>{
    return this.http.get<Blog[]>(`${BASE_URL}/blog`)
  }

  // updateBlog(blog: Blog){
  //   return this.http.post(`${URL}/blog`, blog);
  // }


}
