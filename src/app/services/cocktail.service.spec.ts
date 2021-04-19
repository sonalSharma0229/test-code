import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

import { CocktailService } from './cocktail.service';
import { NgxsModule } from '@ngxs/store';
import { CocktailsState } from '../state/cocktail.state';
import { FiltersState } from '../state/filter.state';

describe('CocktailService test using HttpClientTestingModule', () => {
   // let component: CocktailService;
    let httpTestingController: HttpTestingController;
    let service: CocktailService;
    const baseUri = 'https://www.thecocktaildb.com/api/json/v1/1';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                NgxsModule.forRoot([CocktailsState, FiltersState]),
            ],
        });

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(CocktailService);
    });

    // TODO:
    it('should return the length of possible pages', () => {
        const pageLength = service.getPagesLength();
        expect(pageLength).toBeTruthy();
        
    });

    // TODO:
    it('should return a list from paginateCocktails', () => {
      
        const getPaginateCocktails = service.paginateCocktails(1);
        expect(getPaginateCocktails).toBeTruthy();
    });

    // TODO:
    it('should return cocktail details', () => {
        const conktailsDetails = service.getCocktailDetails("17222");
        expect(conktailsDetails).toBeTruthy();
    });

    // TODO:
    it('should return available category list', () => {

    const list =  service.getFilter("a");
    expect(list).toBeTruthy();
    });

    // TODO:
    it('should reset the search to letter a if no term is included', () => {
        const searchReset = service.searchCocktails("a");
        expect(searchReset).toBeTruthy();
    });

    // TODO:
    it('should search by first letter', () => {
        const serachByfirstLetter = service.searchCocktails("b");
        expect(serachByfirstLetter).toBeTruthy();
    });

    // TODO:
    it('should search by name', () => {
        const serachByName = service.searchCocktails("vodka");
        expect(serachByName).toBeTruthy();
    });

    // TODO:
    it('should filter by category (ingredient)', () => {
        const filterByCategory = service.filterByCategory("i","Gin");
        expect(filterByCategory).toBeTruthy();
    });

    // TODO:
    it('should get a random drink', () => {
        const randomDrink = service.getRandomCocktail();
        expect(randomDrink).toBeTruthy();
    });

    // TODO:
    it('throws 404 error', () => {
        const throws404 = service.searchCocktails("10");
        expect(throws404).toBeTruthy();
    });
});
