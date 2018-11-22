import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/models/movie';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { MovieState } from 'src/app/store/app.reducer';
import * as MovieActions from '../../store/app.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pages-list',
    templateUrl: './pages-list.html',
    styleUrls: ['./pages-list.scss']
})
export class PagesListComponent {
    public movieList: Observable<IMovie[]>;
    public pagePosition: number;

    constructor(
        private movieService: MovieService,
        private store: Store<MovieState>,
        private activeRoute: ActivatedRoute,
    ) {
        this.movieList = this.store.pipe(select('movie'));

        this.loadMovies();
        this.navigateByAnchor();
    }

    private getImageUrl(movies: IMovie[]): IMovie[] {
        return movies.map(movie => {
            movie.url = `/src/app/content/assets/images/movie-covers/${movie.img}`;
            return movie;
        });
    }

    private navigateByAnchor(): void {
        this.activeRoute.fragment.subscribe(res => {
            const tag = document.querySelector(`#${res}`);

            if (tag) {
                tag.scrollIntoView();
            }

        });
    }

    private loadMovies(): void {
        this.movieService.getMovieList()
            .pipe(map(movies => this.getImageUrl(movies)))
            .subscribe(res => {
                this.store.dispatch(new MovieActions.LoadMovie(res));
            });
    }

    public scrollToTop(): void {
        window.scrollTo(0, 0);
    }

}
