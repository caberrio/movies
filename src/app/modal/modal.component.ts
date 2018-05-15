import {Component, Input, OnInit} from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() movie;
  text = '';
  index = -1;
  favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.isFavorite(this.movie.id) ? this.text = 'Remove from favorites' : this.text = 'Add to favorites';
  }

  isFavorite(id) {
    let sw = true;
    this.favorites.forEach(item => {
      if (item.id === id && sw) {
        this.index = this.favorites.indexOf(item);
        sw = false;
      }
    });
    return !sw;
  }
  updateFavorites(movieSelected) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    !this.isFavorite(movieSelected.id) ? favorites.push(movieSelected) : favorites.splice(this.index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
