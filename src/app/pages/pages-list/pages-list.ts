import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subject, fromEvent } from 'rxjs';
import { IMovie } from 'src/app/models/movie';
import { map, takeUntil, debounceTime } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { MovieState } from 'src/app/store/app.reducer';
import { ActivatedRoute } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { genreType } from 'src/app/content/movie.model';

@Component({
    selector: 'app-pages-list',
    templateUrl: './pages-list.html',
    styleUrls: ['./pages-list.scss']
})
export class PagesListComponent implements AfterViewInit, OnDestroy {
    @ViewChild('search') public search: ElementRef;

    private subject = new Subject();

    public movieList: Observable<IMovie[]>;
    public pagePosition: number;
    public searchText: string;
    public genres: string[];
    public genreTag: string;

    constructor(
        private store: Store<MovieState>,
        private activeRoute: ActivatedRoute,
        private scrollToService: ScrollToService
    ) {
        this.genres = Object.values(genreType);
        this.genres.unshift('all');

        this.movieList = this.store.pipe(select('movie'), map(state => state.items));

        this.scrollTo();
    }

    ngAfterViewInit() {
        fromEvent(this.search.nativeElement as HTMLElement, 'keyup')
                .pipe(
                    takeUntil(this.subject),
                    debounceTime(350),
                    map(e => (<HTMLInputElement>e.target).value.toLocaleLowerCase())
                )
                .subscribe(text => {
                    this.searchText = text;
                });
    }

    ngOnDestroy() {
        this.subject.next();
        this.subject.complete();
    }

    public sortByGenre(event: MouseEvent): void {
        const target = event.target as HTMLHtmlElement;

        if (target.tagName !== 'APP-GENRES') {
            this.genreTag = target.textContent.replace('#', '').toLocaleLowerCase();
        }
    }

    public scrollTo(): void {
        this.activeRoute.fragment
            .pipe(takeUntil(this.subject))
            .subscribe(key => {
                console.log(key);
                this.scrollToService.scrollTo({
                    target: `#${key}`,
                    duration: 0
                });
            });
    }

}
