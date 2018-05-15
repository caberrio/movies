import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from '../movie.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() movie;
  text = '';
  favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  constructor(public activeModal: NgbActiveModal, private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.isFavorite(this.movie.id, this.favorites) !== -1 ? this.text = 'Remove from favorites'
      : this.text = 'Add to favorites';
  }

  updateFavorites(movieSelected) {
    this.favorites = this.movieService.updateFavorites(movieSelected);
  }
}
