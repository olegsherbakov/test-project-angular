import { Component } from '@angular/core';

import { ModalService } from '../services/modal.service';
import { IPanel, ICard, Statuses } from '../global/types';
import InitData from '../global/data';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  public panels: IPanel[] = new Array<IPanel>();
  private _rulesMap: { [key: string]: string } = {};

  constructor(private modalService: ModalService) {
    // init boards
    this.panels.push({
      status: 'open',
      title: 'Согласование',
      elements: new Array<ICard>()
    });
    this.panels.push({
      status: 'pending',
      title: 'В ожидании',
      elements: new Array<ICard>()
    });
    this.panels.push({
      status: 'dev',
      title: 'Разработка',
      elements: new Array<ICard>()
    });
    this.panels.push({
      status: 'test',
      title: 'Тестирование',
      elements: new Array<ICard>()
    });
    this.panels.push({
      status: 'qa',
      title: 'Корректировка',
      elements: new Array<ICard>()
    });
    this.panels.push({
      status: 'done',
      title: 'Готово',
      elements: new Array<ICard>()
    });

    // init start position
    InitData.forEach((card) => this.panels[0].elements.push(card));

    // init move rules
    Statuses.forEach((status, index) => {
      this._rulesMap[status] = (index === (Statuses.length - 1)) ? Statuses[0] : Statuses[index + 1];
    });
  }

  public allowDropFunction(status: string): any {
    return (dragData: any) => {
      return this._rulesMap[dragData.status] === status;
    };
  }

  public moveElement($event: any): void {
    const { dragData } = $event;
    const { id, status } = dragData;

    $event.mouseEvent.target.classList.remove('hover');

    this.panels.forEach((panel) => {
      // remove old position
      if (panel.status === status) {
        const index = panel.elements.findIndex((card) => card.id === id);

        panel.elements.splice(index, 1);
      }

      // set new position
      if (panel.status === this._rulesMap[status]) {
        panel.elements.push({
          ...dragData,
          status: panel.status,
        });
      }
    });
  }

  public onDragOver($event): void {
    $event.mouseEvent.target.classList.add('hover');
  }

  public onDragLeave($event): void {
    $event.mouseEvent.target.classList.remove('hover');
  }

  public closeModal(id: string): void {
    this.modalService.close(id);
  }
}
