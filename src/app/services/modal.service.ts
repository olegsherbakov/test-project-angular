import { Injectable } from '@angular/core'
import { ModalComponent } from '@components/modal/modal.component'

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modal: ModalComponent

  public register(modal: ModalComponent): void {
    this.modal = modal
  }

  public open(data: any = {}): void {
    this.modal.open(data)
  }

  public close(): void {
    this.modal.close()
  }
}
