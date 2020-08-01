import { Component, OnInit, } from '@angular/core';
import { LinhasOnibusService } from '../linhas-onibus.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-lista-linhas-onibus',
  templateUrl: './lista-linhas-onibus.component.html',
  styleUrls: ['./lista-linhas-onibus.component.css']
})
export class ListaLinhasOnibusComponent implements OnInit {

  linhasOnibus: Array<any>;

  constructor(private service: LinhasOnibusService, private titleService: Title) { }  

  ngOnInit(): void {
    this.listarLinhasOnibus();  
  }

  listarLinhasOnibus(): void {
    this.service.listarLinhasOnibus().subscribe(dados => this.linhasOnibus = dados);
  }  

  setDocTitle(title: string) {    
    this.titleService.setTitle(title);
  }

}
