import { Component, Input } from '@angular/core'
import { ICard } from '@definitions/interfaces'
import { ModalService } from '@services/modal.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  public card: ICard

  constructor(private modalService: ModalService) {}

  public openModal($event: any): void {
    $event.preventDefault()

    this.modalService.open(this.card)
  }
}
