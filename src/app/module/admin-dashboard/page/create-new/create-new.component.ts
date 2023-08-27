import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddBlogPost, GetBlogPost, GetBlogPosts, UpdateBlogPost } from 'src/app/core/store/action/blog.action';
import { BlogState } from 'src/app/core/store/state/blog.state';
import { BlogPost } from 'src/app/shared/model/blog';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss']
})
export class CreateNewComponent implements OnInit {
  blogForm!: FormGroup;
  paramId!: string;

  @Select(BlogState.blogPost)blogPost$!: Observable<BlogPost>;
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.paramId = params.get('id')
    });
    console.log(this.paramId)
  }

  submitForm(): void {
    if (this.blogForm.valid) {
      if(this.paramId!=null){
        const blogFormValues: BlogPost = this.blogForm.getRawValue();
        blogFormValues.id = parseInt(this.paramId);
        console.log(blogFormValues);
        this.store.dispatch(new UpdateBlogPost(blogFormValues)).subscribe((data) => {
          this.store.dispatch(new GetBlogPosts());
          this.router.navigate(['..'], {relativeTo: this.route});
        });
      }else {
        this.store.dispatch(new AddBlogPost(this.blogForm.getRawValue())).subscribe((data) => {
          this.store.dispatch(new GetBlogPosts());
          this.router.navigate(['..'], {relativeTo: this.route});
       });
      }
    } else {
      Object.values(this.blogForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  ngOnInit(): void {
    this.blogForm = this.fb.group({
      title: [null, [Validators.required]],
      content: [null, [Validators.required]],
    });


    if (this.paramId!=null){
      this.blogPost$.subscribe((value : BlogPost) => {
        this.blogForm.controls['title'].setValue(value.title);
        this.blogForm.controls['content'].setValue(value.content);
      })
    }
  }


  onNavigateBack() : void {
    this.router.navigate(['/dashboard/blog-table']);
  }
}
