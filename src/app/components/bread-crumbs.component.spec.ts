import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BreadCrumbsComponent } from './bread-crumbs.component';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from '../app.module';
import { By } from '@angular/platform-browser';
import { IMovie } from '../models/movie';

describe('Component: BreadCrumbsComponent', () => {
    let component: BreadCrumbsComponent;
    let fixture: ComponentFixture<BreadCrumbsComponent>;

    const defaultData: IMovie = {
        id: 1,
        key: 'string',
        name: 'string',
        description: 'string',
        genres: ['string'],
        rate: 'string',
        length: 'string',
        img: 'string',
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
            providers: [{provide: APP_BASE_HREF, useValue: '*'}]
        });
    });

    it('should create the Page Detail', () => {
        fixture = TestBed.createComponent(BreadCrumbsComponent);
        const app = fixture.debugElement.componentInstance;
        component = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('testing elements', () => {
        const nav = fixture.debugElement.query(By.css('nav'));
        const ol = fixture.debugElement.query(By.css('ol'));
        const li = fixture.debugElement.query(By.css('li'));
        const a = fixture.debugElement.query(By.css('a'));

        expect(nav).toBeTruthy();
        expect(ol).toBeTruthy();
        expect(li).toBeTruthy();
        expect(a).toBeTruthy();

        expect(nav.attributes).toEqual({ 'aria-label': 'breadcrumb' });
        expect(ol.nativeElement.className).toEqual('breadcrumb');
        expect(li.nativeElement.className).toEqual('breadcrumb-item');
    });

    it('testing Input()', () => {
        expect(component.movie).not.toBeDefined();
        // set data
        component.movie = defaultData;

        expect(component.movie).toBeTruthy();
        expect(component.movie).toEqual(defaultData);
    });

});
