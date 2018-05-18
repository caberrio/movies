import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  query: string;

  @Output() newSearch = new EventEmitter();
  @Output() onLogged = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  setLogged() {
    this.onLogged.emit();
  }

  onNewSearch() {
    if (this.query !== '') {
      this.newSearch.emit(this.query);
    }
  }
}
