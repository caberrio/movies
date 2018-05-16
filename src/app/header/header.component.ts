import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  query: string;

  @Output() newSearch = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNewSearch() {
    if (this.query !== '') {
      this.newSearch.emit(this.query);
    }
  }
}
