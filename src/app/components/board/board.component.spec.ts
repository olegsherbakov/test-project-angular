import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import {
  DraggableComponent,
  DroppableComponent,
  DragDropConfig,
  DragDropService,
} from 'ng2-dnd'
import { BoardComponent } from '@components/board/board.component'
import { CardComponent } from '@components/card/card.component'

describe('BoardComponent', () => {
  let component: BoardComponent
  let fixture: ComponentFixture<BoardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoardComponent,
        CardComponent,
        DraggableComponent,
        DroppableComponent,
      ],
      providers: [DragDropConfig, DragDropService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
