import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaLinhasOnibusComponent } from './lista-linhas-onibus/lista-linhas-onibus.component';
import { ListaLinhasLotacaoComponent } from './lista-linhas-lotacao/lista-linhas-lotacao.component';
import { PaginaInicialComponent} from './pagina-inicial/pagina-inicial.component';
import { ItinerariosComponent } from './itinerarios/itinerarios.component';
import { ItinerariosLotacaoComponent } from './itinerarios-lotacao/itinerarios-lotacao.component';


const routes: Routes = [
  {path: '', redirectTo: '/pagina-inicial', pathMatch: 'full'},
  {path: 'pagina-inicial', component: PaginaInicialComponent},
  {path: 'lista-linhas-lotacao', component: ListaLinhasLotacaoComponent},
  {path: 'lista-linhas-onibus', component: ListaLinhasOnibusComponent},
  {path: 'itinerarios/:id', component: ItinerariosComponent},
  {path: 'itinerarios/itinerarios-lotacao/:id', component: ItinerariosLotacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
