import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// local files
import { PagesListComponent, PagesDetailComponent } from './pages';

const routes: Routes = [
    {
        path: 'movies',
        component: PagesListComponent,
    },
    {
        path: 'movie/id/:id',
        component: PagesDetailComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'movies'
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
});
