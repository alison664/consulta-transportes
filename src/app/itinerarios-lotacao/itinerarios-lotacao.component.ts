import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinhasOnibusService } from '../linhas-onibus.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-itinerarios-lotacao',
  templateUrl: './itinerarios-lotacao.component.html',
  styleUrls: ['./itinerarios-lotacao.component.css']
})
export class ItinerariosLotacaoComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private service: LinhasOnibusService, private titleService: Title) { }


  itinerarios: Array<any>

  dtOptions: DataTables.Settings = {};


  ngOnInit(): void {    
    this.listarItinerarios();   
    this.dtOptions = {
      pagingType: 'full_numbers'
    };  
    
  }

  listarItinerarios(): void {
    const id = this.actRoute.snapshot.params.id;
    this.service.listarItinerarios(id).subscribe(dados => this.itinerarios = dados);
  }

  setDocTitle(title: string) {    
    this.titleService.setTitle(title);
  }


}
