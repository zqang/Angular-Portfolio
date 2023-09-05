import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Portfolio } from '../model/portfolio';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(`${environment.BACKEND_URL}/Portfolios`);
  }

  createPortfolio(Portfolio: Portfolio){
    const headers = { 'content-type': 'application/json'}
    const body= JSON.stringify(Portfolio);
    return this.http.post(`${environment.BACKEND_URL}/Portfolios`, body, {'headers': headers});
  }


  updatePortfolio(Portfolio: Portfolio){
    const headers = { 'content-type': 'application/json'}
    const body= JSON.stringify(Portfolio);
    return this.http.put(`${environment.BACKEND_URL}/Portfolios`, body, {'params': {'id': Portfolio.id.toString()}, 'headers': headers});
  }

  deletePortfolio(id: number){
    return this.http.delete(`${environment.BACKEND_URL}/Portfolios`, {params: {'id' : id.toString()}})
  }
}
