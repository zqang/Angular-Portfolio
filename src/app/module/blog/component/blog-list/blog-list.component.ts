import { Component, OnInit } from '@angular/core';
import { Blog } from '../../model/blog';
import { BlogRestService } from '../../service/blog-rest.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  data: Blog[] = [];


  constructor(private blogService: BlogRestService){}

  ngOnInit(): void {
    this.loadData(1);
    this.blogService.getBlog().subscribe((data: Blog) => {
      console.log(data);
    })
  }

  loadData(pi: number): void {
    // this.data = new Array(5).fill({}).map((_, index) => ({
    //   href: 'http://ant.design',
    //   title: `ant design part ${index} (page: ${pi})`,
    //   avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //   description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    //   content:
    //     'We supply a series of design principles, practical patterns and high quality design resources ' +
    //     '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    // }));
    this.data = new Array(5).fill({}).map((_, index) => ({
      id: '1',
      timestamp: '19/02/2022',
      author: 'alvin',
      name: `ant design part ${index} (page: ${pi})`,
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      body:
        'We supply a series of design principles, practical patterns and high quality design resources ' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      is_active: true
    }));
  }
}
