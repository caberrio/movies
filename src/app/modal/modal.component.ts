import {Component, Input, OnInit} from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() movie;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    console.log(this.movie);
  }

  addToFavorites(movieSelected) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let sw = true;

    favorites.forEach(item => {
      if (item.id === movieSelected.id && sw) {
        sw = false;
      }
    });

    if (sw) {
      favorites.push(movieSelected);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      alert('The movie you selected is already in your Favorites list');
    }
  }
}
