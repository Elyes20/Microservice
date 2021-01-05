import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AvionRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(avion: any):Observable<any> {
    return this.http.post("http://localhost:8883/avion/save",avion,{responseType:'text' as 'json'});
  }
}
