import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieState } from 'src/app/store/app.reducer';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-pages-detail',
    templateUrl: './pages-detail.html',
    styleUrls: ['./pages-detail.scss']
})
export class PagesDetailComponent {

    private movieId: number;

    constructor(
        private activeRoute: ActivatedRoute,
        private store: Store<MovieState>
    ) {
        this.movieId = +this.activeRoute.snapshot.params.id;

        this.store.pipe(
            select('movie'),
            map(movies => movies.find(movie => movie.id === this.movieId))
        )
        .subscribe(movie => {
            console.log(movie);
        });
    }
}
