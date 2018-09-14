import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { BoardComponent } from './board.component'
import { CardComponent } from './card/card.component'
import { ModalComponent } from '../modal/modal.component'

describe('BoardComponent', () => {
  let component: BoardComponent
  let fixture: ComponentFixture<BoardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent, CardComponent, ModalComponent],
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
