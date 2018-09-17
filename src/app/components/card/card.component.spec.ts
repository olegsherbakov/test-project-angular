import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { DraggableComponent, DroppableComponent, DragDropConfig, DragDropService } from 'ng2-dnd'
import { CardComponent } from '@components/card/card.component'

describe('CardComponent', () => {
  let component: CardComponent
  let fixture: ComponentFixture<CardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, DraggableComponent, DroppableComponent],
      providers: [DragDropConfig, DragDropService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
