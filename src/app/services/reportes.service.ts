import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  private apiUrl = 'https://proyecto-final-backend-hlv5.onrender.com/api/reportes';

  constructor(private http: HttpClient) { }

  obtenerEstadisticas() {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/estadisticas`, { headers });
  }

  obtenerTurnosPorMedico() {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get('https://proyecto-final-backend-hlv5.onrender.com/api/reportes/turnos-por-medico', { headers });
  }

}
