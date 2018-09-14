import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DndModule } from 'ng2-dnd'

import { BoardComponent } from './board.component'
import { CardComponent } from './card/card.component'

@NgModule({
  imports: [CommonModule, DndModule.forRoot()],
  declarations: [BoardComponent, CardComponent],
  exports: [BoardComponent],
})
export class BoardModule {}
