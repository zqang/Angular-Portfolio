import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../model/portfolio';

// const URL = 'http://127.0.0.1:8000';
const URL = 'https://django-portfolio-alvin.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class PortfolioRestService {

  constructor(private http: HttpClient) { }

  getPortfolio(){
    return this.http.get<Portfolio[]>(`${URL}/portfolio`);
  }

  // updatePortfolio(portfolio: Portfolio){
  //   return this.http.post(`${URL}/portfolio`, portfolio);
  // }


}
