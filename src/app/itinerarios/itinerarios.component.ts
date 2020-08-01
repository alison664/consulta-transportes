import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinhasOnibusService } from '../linhas-onibus.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-itinerarios',
  templateUrl: './itinerarios.component.html',
  styleUrls: ['./itinerarios.component.css']
})
export class ItinerariosComponent implements OnInit {

  linhasOnibusUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o';
  itinerarios: Array<any>;  

  constructor(private actRoute: ActivatedRoute, private service: LinhasOnibusService, private titleService: Title) { 
    
  }

  ngOnInit(): void {
    this.listarItinerarios();  

  }

  listarItinerarios(): void {
    const id = this.actRoute.snapshot.params.id;
    this.service.listarItinerarios(id).subscribe(dados => this.itinerarios = dados);

  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }


}
