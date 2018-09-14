import { Component } from '@angular/core'

import { ControlService } from './services/control.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'DnD Board Simple Example'

  constructor(private controlService: ControlService) {}

  private repeat(): void {
    this.controlService.send('repeat')
  }
}
