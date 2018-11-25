import { TestBed, ComponentFixture } from '@angular/core/testing';
import { GengresComponent } from './genres.component';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from '../app.module';

describe('Component: GengresComponent', () => {
    let component: GengresComponent;
    let fixture: ComponentFixture<GengresComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
            providers: [{provide: APP_BASE_HREF, useValue: '*'}]
        });
    });

    it('should create the Genres', () => {
        fixture = TestBed.createComponent(GengresComponent);
        const app = fixture.debugElement.componentInstance;
        component = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('testing genres', () => {
        expect(component.genres).not.toBeDefined();
        component.genres = ['all', 'action'];
        expect(component.genres).toBeDefined();
    });

});
