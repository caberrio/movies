import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SbxCoreService, SbxSessionService} from 'sbxangular';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class MovieService {

  APIKEY = '5198931fa9657e14d0fd0261c276ca40';
  userId = this.cookie.get('user_id');
  userKey: string;


  constructor(private http: HttpClient, private sbxCoreService: SbxCoreService, private cookie: CookieService) {
    this.getUserKey().then(data => {this.userKey = data; });
  }

  getMovies(movieType: string) {
    return this.sbxCoreService.find('movie').andWhereIsEqual('type', movieType).toPromise().then((data: any) => {
       return data.success ? data.results : [];
    });

  }

  getFavorites() {
    return this.sbxCoreService.find('favorite').andWhereIsEqual('user.user_id', this.userId)
      .fetchModels(['movie']).toPromise(['movie'])
      .then((data: any) => {
        data = data.fetched_results.movie;
        return Object.keys(data).map(key => {
          return data[key];
        });
      });
  }

  getUserKey() {
    return this.sbxCoreService.find('user').andWhereIsEqual('user_id', this.userId).toPromise().then(data => {
      return data.results[0]._KEY;
    });
  }

  addFavorite(movieKey) {
    this.sbxCoreService.insert('favorite', {user: this.userKey, movie: movieKey}).then(res => {});
  }
  removeFavorite(movieKey) {
    this.sbxCoreService.delete('favorite').andWhereIsEqual('user', this.userKey)
      .andWhereIsEqual('movie', movieKey).toPromise().then(res => {
      console.log(res);
    });
  }
  searchMovie(query: string) {
    return this.sbxCoreService.find('movie').andWhereContains('title', query).toPromise()
      .then((data: any) => {
        return data.results;
      });
    /* themovie db search
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.APIKEY + '&query=' + query).toPromise()
      .then((data: any) => {
        return data.results;
      });*/
  }
}
