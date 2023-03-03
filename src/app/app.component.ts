import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './shared/sidenav/sidenav.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Honorarios';
  @ViewChild('menu') menu!: SidenavComponent;

  toggleMenu() {
    this.menu.toggle();
  }

}
