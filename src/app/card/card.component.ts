import { Component, Input } from '@angular/core';

import { ICard } from '../global/types';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private modalService: ModalService) {}

  @Input() data: ICard;

  @Input() isStatic: boolean;

  public openModal($event: any): void {
    $event.preventDefault();

    if (!this.isStatic) {
      this.modalService.open('custom-modal', this.data);
    }
  }
}


