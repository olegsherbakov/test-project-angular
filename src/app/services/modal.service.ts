import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: any[] = []

  public add(modal: any): void {
    this.modals.push(modal)
  }

  public remove(id: string): void {
    this.modals = this.modals.filter(x => x.id !== id)
  }

  public open(id: string, data: any = {}): void {
    const modal: any = this.modals.filter(x => x.id === id)[0]

    modal.open(data)
  }

  public close(id: string): void {
    const modal: any = this.modals.filter(x => x.id === id)[0]

    modal.close()
  }
}
