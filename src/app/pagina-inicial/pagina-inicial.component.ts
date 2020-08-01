import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
  }

  setDocTitle(title: string) {    
    this.titleService.setTitle(title);
  }

}
