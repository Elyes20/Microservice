import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {
  private baseUrl = 'http://localhost:8883/compagnie';

  constructor(private http: HttpClient) { }

  getCompagnie(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getone/${id}`);
  }

  createCompagnie(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/save`, employee);
  }

  updateCompagnie(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateCompagnie/${id}`, value);
  }

  deleteCompagnie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getCompagniesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getall`);
  }

}
