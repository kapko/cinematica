import { TestBed } from '@angular/core/testing';
import { PagesListComponent } from './pages-list';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('Component: PagesList', () => {
    let component: PagesListComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        });
    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(PagesListComponent);
        const app = fixture.debugElement.componentInstance;
        component = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('testing new Subject', () => {
        expect(component.subject.closed).toBe(false);
        component.ngOnDestroy();
    });

    it('testing genres', () => {
        expect(component.genres.length).toEqual(12);
        expect(component.genres[0]).toEqual('all');
    });

});
