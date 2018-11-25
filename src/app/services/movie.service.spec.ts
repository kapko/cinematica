import { MovieService } from './movie.service';
import { Observable } from 'rxjs';

describe('MasterService without Angular testing support', () => {
    let masterService: MovieService;

    it('testing service', () => {
        masterService = new MovieService();
        expect(masterService).toBeDefined();
        expect(masterService.getMovieList() instanceof Observable).toBeTruthy();
    });

    it('testing method getMovieList', () => {
        masterService
            .getMovieList()
            .subscribe(res => {
                expect(res).toBeDefined();
                expect(res instanceof Array).toBeTruthy();
            });
    });

});
