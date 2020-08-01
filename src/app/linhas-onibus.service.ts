import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinhasOnibusService {

  linhasOnibusUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o';
  
  linhasLotacaoUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l';

  itinerariosUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';  

  constructor(private http: HttpClient) { }

  listarLinhasOnibus() {
    return this.http.get<any[]>(`${this.linhasOnibusUrl}`);
  }

  listarLinhasLotacao() {
    return this.http.get<any[]>(`${this.linhasLotacaoUrl}`);
  }

  listarItinerarios(linha_id: number) {    
    return this.http.get<any[]>(`${this.itinerariosUrl}${linha_id}`);
  }

}
