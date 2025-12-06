import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemoResponse } from '../interfaces/demo-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private baseUrl: string = "http://localhost:8080/api/demo"

  constructor(private httpClient: HttpClient) { }

  sendGetRequest(pathVariable: string): Observable<DemoResponse> {
    return this.httpClient.get<DemoResponse>(`${this.baseUrl}/${pathVariable}`);
  }
}
