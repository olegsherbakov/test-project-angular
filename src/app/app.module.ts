import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { BoardModule } from './board/board.module'

const routes: Routes = []

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    BoardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
