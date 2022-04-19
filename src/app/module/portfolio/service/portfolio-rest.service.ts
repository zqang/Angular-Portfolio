import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../model/portfolio';
import { BASE_URL } from 'src/app/shared/constant/url.constants';

@Injectable({
  providedIn: 'root'
})
export class PortfolioRestService {

  constructor(private http: HttpClient) { }

  getPortfolios(): Observable<any>{
    return this.http.get<Portfolio[]>(`${BASE_URL}/portfolio`)
  }

  // updatePortfolio(portfolio: Portfolio){
  //   return this.http.post(`${URL}/portfolio`, portfolio);
  // }


}
