import {Component, Input, OnInit} from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() movie;
  text = '';
  index = -1;
  favorites = [];

  constructor(public activeModal: NgbActiveModal, private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getFavorites().then(data => {
      this.favorites = data;
      this.text = this.isFavorite(this.movie.id) ? 'Remove from favorites' : 'Add to favorites';
    });
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
    if (!this.isFavorite(movieSelected.id)) {
      this.movieService.addFavorite(movieSelected._KEY).then(res => {
        this.activeModal.close('Movie successfully added to your Favorites');
      });
    } else {
      this.movieService.removeFavorite(movieSelected._KEY).then(res => {
        this.activeModal.close('Movie successfully deleted from your Favorites');
      });
    }
  }
}
