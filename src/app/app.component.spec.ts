import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
// LOCAL FILES
import { PagesListComponent, PagesDetailComponent } from './pages';
import { MovieService } from './services/movie.service';
import { movieReducer } from './store/app.reducer';
import { GengresComponent } from './components/genres.component';
import { BreadCrumbsComponent } from './components/bread-crumbs.component';
import { RateComponent } from './components/rate.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';


describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                PagesListComponent,
                GengresComponent,
                PagesDetailComponent,
                BreadCrumbsComponent,
                SearchPipe,
                RateComponent
            ],
            imports: [
                RouterTestingModule,
                StoreModule.forRoot({movie: movieReducer}),
                FormsModule,
            ],
            providers: [
                MovieService
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});
