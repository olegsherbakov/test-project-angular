import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DndModule } from 'ng2-dnd'

import { BoardComponent } from './board.component'
import { CardComponent } from './card/card.component'
import { ModalComponent } from './modal/modal.component'

@NgModule({
  imports: [CommonModule, DndModule.forRoot()],
  declarations: [BoardComponent, CardComponent, ModalComponent],
  exports: [BoardComponent],
})
export class BoardModule {}
