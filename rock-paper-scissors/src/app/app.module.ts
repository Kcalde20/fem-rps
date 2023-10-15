import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameViewComponent } from './views/game-view/game-view.component';
import { RulesViewComponent } from './views/rules-view/rules-view.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    GameViewComponent,
    RulesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
