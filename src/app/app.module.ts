import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
} from '@angular/material';

// LOCAL FILES
import { AppComponent } from './app.component';
import { PagesListComponent, PagesDetailComponent } from './pages';
import { Routing } from './app.router';
import { MovieService } from './services/movie.service';
import { movieReducer } from './store/app.reducer';

@NgModule({
    declarations: [
        AppComponent,
        PagesListComponent,
        PagesDetailComponent
    ],
    imports: [
        BrowserModule,
        MatListModule,
        Routing,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatChipsModule,
        StoreModule.forRoot({movie: movieReducer})
    ],
    providers: [
        MovieService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
