import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieState } from 'src/app/store/app.reducer';
import { Store, select } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/models/movie';

@Component({
    selector: 'app-pages-detail',
    templateUrl: './pages-detail.html',
    styleUrls: ['./pages-detail.scss']
})
export class PagesDetailComponent {

    private movieId: number;
    public movie: IMovie;

    constructor(
        private activeRoute: ActivatedRoute,
        private store: Store<MovieState>
    ) {
        this.movieId = +this.activeRoute.snapshot.params.id;

        this.store
            .pipe(
                select('movie'),
                take(1),
                map(state => state.items.find(movie => movie.id === this.movieId))
            )
            .subscribe(movie => {
                console.log(movie);
                this.movie = movie;
            });

    }
}
