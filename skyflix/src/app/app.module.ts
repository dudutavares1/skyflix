import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogosComponent } from './componentes/jogos/jogos.component';
import { MenuComponent } from './views/menu/menu.component';
import { RodapeComponent } from './views/rodape/rodape.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    JogosComponent



   ],
  imports: [
    BrowserModule,
		HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
