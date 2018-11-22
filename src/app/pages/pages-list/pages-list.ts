import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Observable, Subject } from 'rxjs';
import { IMovie } from 'src/app/models/movie';
import { map, filter, takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { MovieState } from 'src/app/store/app.reducer';
import * as MovieActions from '../../store/app.actions';
import { ActivatedRoute } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
    selector: 'app-pages-list',
    templateUrl: './pages-list.html',
    styleUrls: ['./pages-list.scss']
})
export class PagesListComponent implements AfterViewInit, OnDestroy {

    private subject = new Subject();

    public movieList: Observable<IMovie[]>;
    public pagePosition: number;

    constructor(
        private movieService: MovieService,
        private store: Store<MovieState>,
        private activeRoute: ActivatedRoute,
        private scrollToService: ScrollToService
    ) {
        this.movieList = this.store.pipe(select('movie'));

        this.movieList.subscribe(res => {
            console.log(res);
        });
    }

    ngAfterViewInit() {
        this.activeRoute.fragment
            .pipe(takeUntil(this.subject))
            .subscribe(res => {
                console.log(res);
                this.click(res);
            });
    }

    ngOnDestroy() {
        this.subject.next();
        this.subject.complete();
    }

    public click(page: string): void {
        this.scrollToService.scrollTo({
            target: `#${page}`,
            duration: 0
        });
    }

    public scrollToTop(): void {
        window.scrollTo(0, 0);
    }

}
