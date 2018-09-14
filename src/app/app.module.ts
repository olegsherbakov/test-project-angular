import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BoardModule } from './board/board.module'
import { ModalComponent } from './modal/modal.component'

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [BrowserModule, BoardModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
