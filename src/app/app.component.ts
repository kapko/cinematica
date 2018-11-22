import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';
import { Store } from '@ngrx/store';
import { MovieState } from './store/app.reducer';
import * as MovieActions from './store/app.actions';
import { take, map } from 'rxjs/operators';
import { IMovie } from './models/movie';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private movieService: MovieService,
        private store: Store<MovieState>
    ) {
        // just for dummy data
        this.movieService
            .getMovieList()
            .pipe(
                take(1),
                map(movies => this.getImageUrl(movies))
            )
            .subscribe(movies => {
                this.store.dispatch(new MovieActions.LoadMovie(movies));
            });
    }

    private getImageUrl(movies: IMovie[]): IMovie[] {
        return movies.map(movie => {
            movie.url = `/src/app/content/assets/images/movie-covers/${movie.img}`;
            return movie;
        });
    }

}
