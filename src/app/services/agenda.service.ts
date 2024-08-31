import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private API = 'https://autolxap02-12.cieautometal.com.br:8090/'

  constructor(private http: HttpClient) { }

  listaAgenda():  Observable<any>{
    let url = this.API + 'api/wscurso/v1/agenda'

    let params = new HttpParams()
    params = params.append('pageSize', 60)
    params = params.append('page', 1)

    return this.http.get<any>(url, {params: params})
  }
}
