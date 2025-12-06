import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemoResponse } from '../interfaces/demo-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private httpClient: HttpClient) { }

  sendGetRequest(pathVariable: string): Observable<DemoResponse> {
    return this.httpClient.get<DemoResponse>(`${environment.apiBaseUrl}/${pathVariable}`);
  }
}
