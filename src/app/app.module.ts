import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// LOCAL FILES
import { AppComponent } from './app.component';
import { PagesListComponent, PagesDetailComponent } from './pages';
import { Routing } from './app.router';
import { MovieService } from './services/movie.service';
import { movieReducer } from './store/app.reducer';
import { GengresComponent } from './components/genres.component';
import { BreadCrumbsComponent } from './components/bread-crumbs.component';
import { RateComponent } from './components/rate.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
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
        BrowserModule,
        Routing,
        FormsModule,
        ScrollToModule.forRoot(),
        StoreModule.forRoot({movie: movieReducer})
    ],
    providers: [
        MovieService
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
