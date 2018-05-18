import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query = '';
  userLogged = false;

  makeSearch(event) {
    this.query = event;
  }

  logged() {
    this.userLogged = true;
  }
}
