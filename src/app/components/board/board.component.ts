import { Component, Input } from '@angular/core'
import { ControlService } from '@services/control.service'
import { IPanel } from '@definitions/interfaces'
import { statuses, boards, cards } from '@assets/data'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input()
  public panels: IPanel[] = new Array<IPanel>()
  private _rulesMap: { [key: string]: string } = {}

  constructor(private controlService: ControlService) {
    // init boards
    this.panels.push(...boards)

    // init start position
    cards.forEach(card => this.panels[0].elements.push(card))

    // init move rules
    statuses.forEach((status, index) => {
      this._rulesMap[status] =
        index === statuses.length - 1 ? statuses[0] : statuses[index + 1]
    })

    controlService.subscribe({
      repeat: () => {
        // clear panels
        for (let i = 0; i < this.panels.length; i++) {
          while (this.panels[i].elements.length) {
            this.panels[i].elements.pop()
          }
        }

        // init first
        cards.forEach(card => this.panels[0].elements.push(card))
      },
    })
  }

  public allowDropFunction(status: string): any {
    return (dragData: any) => {
      return dragData && this._rulesMap[dragData.status] === status
    }
  }

  public moveElement($event: any): void {
    const { dragData } = $event
    const { id, status } = dragData

    $event.mouseEvent.target.classList.remove('hover')

    this.panels.forEach(panel => {
      // remove old position
      if (panel.status === status) {
        const index = panel.elements.findIndex(card => card.id === id)

        panel.elements.splice(index, 1)
      }

      // set new position
      if (panel.status === this._rulesMap[status]) {
        panel.elements.push({
          ...dragData,
          status: panel.status,
        })
      }
    })
  }

  public onDragOver($event): void {
    $event.mouseEvent.target.classList.add('hover')
  }

  public onDragLeave($event): void {
    $event.mouseEvent.target.classList.remove('hover')
  }
}
