import { Component, Input } from '@angular/core';

import { ICard } from '../definitions/types';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input('card') card: ICard;
  @Input() isStatic: boolean;

  constructor(private modalService: ModalService) {}

  public openModal($event: any): void {
    $event.preventDefault();

    if (!this.isStatic) {
      this.modalService.open('custom-modal', this.card);
    }
  }
}


