import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { DndModule } from 'ng2-dnd'
import { AppComponent } from '@components/app.component'
import { BoardComponent } from '@components/board/board.component'
import { CardComponent } from '@components/card/card.component'
import { ModalComponent } from '@components/modal/modal.component'

@NgModule({
  declarations: [AppComponent, BoardComponent, CardComponent, ModalComponent],
  imports: [BrowserModule, DndModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
