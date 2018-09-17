import { Component, ElementRef, Input } from '@angular/core'
import { ModalService } from '@services/modal.service'
import { ICard } from '@definitions/interfaces'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input()
  private card: ICard
  private element: HTMLElement

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement
    this.element.style.display = 'none'
    this.modalService.register(this)
  }

  public open(card: ICard): void {
    this.element.style.display = 'block'
    document.body.style.overflow = 'hidden'
    this.card = card
  }

  public close(): void {
    this.element.style.display = 'none'
    document.body.style.overflow = 'inherit'
    this.card = null
  }
}
