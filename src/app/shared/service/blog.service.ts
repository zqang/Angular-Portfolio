import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog, BlogPost } from '../model/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http
      .get<BlogPost[]>(`${environment.BACKEND_URL}/BlogPosts`)
      .pipe(catchError(this.handleError));
  }

  getBlogs(): Observable<any> {
    return this.http
      .get<Blog[]>(`${environment.BACKEND_URL}/blog`)
      .pipe(catchError(this.handleError));
  }

  // getBlogPost(): Observable<BlogPost> {
  //   return this.http.get<BlogPost>(`${environment.BACKEND_URL}/BlogPosts`);
  // }

  createBlogPost(blogPost: BlogPost) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(blogPost);
    return this.http.post(`${environment.BACKEND_URL}/BlogPosts`, body, {
      headers: headers,
    });
  }

  updateBlogPost(blogPost: BlogPost) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(blogPost);
    return this.http.put(`${environment.BACKEND_URL}/BlogPosts`, body, {
      params: { id: blogPost.id.toString() },
      headers: headers,
    });
  }

  deleteBlogPost(id: number) {
    return this.http.delete(`${environment.BACKEND_URL}/BlogPosts`, {
      params: { id: id.toString() },
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
