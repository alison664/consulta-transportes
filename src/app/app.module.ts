import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLinhasOnibusComponent } from './lista-linhas-onibus/lista-linhas-onibus.component';
import { ListaLinhasLotacaoComponent } from './lista-linhas-lotacao/lista-linhas-lotacao.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { LinhasOnibusService } from './linhas-onibus.service';
import { ItinerariosComponent } from './itinerarios/itinerarios.component';

import { MatButtonModule } from '@angular/material/button';
import { DataTablesModule } from 'angular-datatables';
import { ItinerariosLotacaoComponent } from './itinerarios-lotacao/itinerarios-lotacao.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaLinhasOnibusComponent,
    ListaLinhasLotacaoComponent,
    PaginaInicialComponent,
    ItinerariosComponent,
    ItinerariosLotacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,       
    MatButtonModule,    
    DataTablesModule
  ],
  providers: [
    LinhasOnibusService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
