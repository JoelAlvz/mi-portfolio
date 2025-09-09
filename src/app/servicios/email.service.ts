import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = '/api/sendEmail'; 

  constructor(private http: HttpClient) {}

  sendEmail(email: string) {
    return this.http.post(this.apiUrl, { email });
  }
}
