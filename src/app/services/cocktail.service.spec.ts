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
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should return a list from paginateCocktails', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should return cocktail details', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should return available category list', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should reset the search to letter a if no term is included', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should search by first letter', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should search by name', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should filter by category (ingredient)', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should get a random drink', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('throws 404 error', () => {
        expect(false).toBeTruthy();
    });
});
