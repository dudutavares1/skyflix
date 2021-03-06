import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './views/menu/menu.component';
import { RodapeComponent } from './views/rodape/rodape.component';

import { HttpClientModule } from '@angular/common/http';

import { JogosComponent } from './componentes/jogos/jogos.component';
import { ProgramasComponent } from './componentes/programas/programas.component';
import { SeriesComponent } from './componentes/series/series.component';
import { FilmesComponent } from './componentes/filmes/filmes.component';
import { TemporadasComponent } from './componentes/temporadas/temporadas.component';

import { LoginComponent } from './componentes/usuario/login/login.component';

import { AuthService } from './componentes/usuario/login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    JogosComponent,
    ProgramasComponent,
    SeriesComponent,
    FilmesComponent,
    TemporadasComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [AuthService],

  bootstrap: [AppComponent],
})
export class AppModule {}
