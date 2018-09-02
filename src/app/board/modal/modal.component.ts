import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from '../services/modal.service';
import { ICard } from '../definitions/types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() id: string;
  @Input() card: ICard;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
    this.element.style.display = 'none';
  }

  public ngOnInit(): void {
    const modal = this;

    // ensure id attribute exists
    if (!this.id) {
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'app-modal') {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  public ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  public open(card: ICard): void {
    this.element.style.display = 'block';
    document.body.style.overflow = 'hidden';
    this.card = card;
  }

  // close modal
  public close(): void {
    this.element.style.display = 'none';
    document.body.style.overflow = 'inherit';
    this.card = null;
  }
}
