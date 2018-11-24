import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PagesListComponent } from './pages-list';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';

describe('Component: PagesList', () => {
    let component: PagesListComponent;
    let fixture: ComponentFixture<PagesListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        });
    });

    it('should create the component', () => {
        fixture = TestBed.createComponent(PagesListComponent);
        const app = fixture.debugElement.componentInstance;
        component = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('testing new Subject', () => {
        expect(component.subject).toBeTruthy();
    });

    it('testing search input', () => {
        expect(component.search).toBeTruthy();
        expect(component.search.nativeElement.tagName).toEqual('INPUT');

        const el = fixture.debugElement.query(By.css('input'));
        const input = el.nativeElement;

        input.value = 'testing';

        expect(input.value).toEqual('testing');
    });

    it('testing genres', () => {
        expect(component.genres instanceof Array).toBeTruthy();
        expect(component.genres.length).toEqual(12);
        // check for equal
        expect(component.genres).toEqual(['all', 'action',
        'adventure', 'biography', 'comedy', 'crime', 'drama', 'history', 'mystery', 'scifi', 'sport', 'thriller']);
    });

    it('testing functions', () => {
        expect(component.scrollTo).toBeTruthy();
        expect(component.sortByGenre).toBeTruthy();
    });

    it('testing mark', () => {
        const marks = document.querySelectorAll('mark');

        expect(marks).toBeTruthy();
    });

    it('testing movieList', () => {
        expect(component.movieList).toBeTruthy();
        expect(component.movieList instanceof Observable).toBeTruthy();
    });

});
