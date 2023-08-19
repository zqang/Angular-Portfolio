import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../model/portfolio';

const URL = 'http://localhost:44305/api';

@Injectable({
  providedIn: 'root'
})
export class PortfolioEditService {

  constructor(private http: HttpClient) { }

  getPortfolio(){
    return this.http.get(`${URL}/portfolio`);
  }

  updatePortfolio(portfolio: Portfolio){
    return this.http.post(`${URL}/portfolio`, portfolio);
  }


}
