import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  private listeners: Object = {}

  public send(name: string): void {
    if (name in this.listeners) {
      this.listeners[name].forEach(listener => listener())
    }
  }

  public subscribe(listener: Object): void {
    Object.keys(listener).forEach(name => {
      if (!this.listeners[name]) {
        this.listeners[name] = []
      }

      this.listeners[name].push(listener[name])
    })
  }

  public unsubscribe(listener: Object) {
    Object.keys(listener).forEach(name => {
      if (this.listeners[name]) {
        const index = this.listeners[name].indexOf(listener[name])

        if (index !== -1) {
          this.listeners[name].splice(index, 1)
        }
      }
    })
  }
}
