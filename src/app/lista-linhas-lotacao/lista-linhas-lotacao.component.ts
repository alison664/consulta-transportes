import { Component, OnInit, ViewChild } from '@angular/core';
import { LinhasOnibusService } from '../linhas-onibus.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lista-linhas-lotacao',
  templateUrl: './lista-linhas-lotacao.component.html',
  styleUrls: ['./lista-linhas-lotacao.component.css']
})
export class ListaLinhasLotacaoComponent implements OnInit {

  linhasLotacao: Array<any>; 
  

  constructor(private service: LinhasOnibusService, private titleService: Title) { }

  ngOnInit(): void {    
    this.listarLinhasLotacao();    
    
  }  

  listarLinhasLotacao(): void {
    this.service.listarLinhasLotacao().subscribe(dados => this.linhasLotacao = dados);
  }

  setDocTitle(title: string) {   
    this.titleService.setTitle(title);

  }

}
