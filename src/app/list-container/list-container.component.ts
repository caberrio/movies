import {Component, Input, OnInit, SimpleChange, OnChanges} from '@angular/core';
import {MovieService} from '../movie.service';


@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit, OnChanges {


  private moviesPopular: any;
  private moviesTop: any;
  private moviesSearch: any;
  private moviesFavorite: any;

  @Input() query;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getList('popular').then(data => {
      this.moviesPopular = data;
    });
    this.movieService.getList('top_rated').then(data => {
      this.moviesTop = data;
    });
    this.loadFavorites();
  }

  loadFavorites() {
    this.moviesFavorite = JSON.parse(localStorage.getItem('favorites'));
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (this.query !== '') {
      this.movieService.searchMovie(this.query).then(data => {
        this.moviesSearch = data;
      });
    }
  }


}
