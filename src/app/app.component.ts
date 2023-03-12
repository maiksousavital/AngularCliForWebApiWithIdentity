import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faBars = faBars;
  title = 'AngularClient';
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
