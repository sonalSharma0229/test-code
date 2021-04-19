import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxsModule } from '@ngxs/store';
import { CocktailsState } from 'src/app/state/cocktail.state';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltersState } from 'src/app/state/filter.state';
import { By } from '@angular/platform-browser';
import { SetSearchTerm } from 'src/app/state/filter.action';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                NgxsModule.forRoot([CocktailsState, FiltersState]),
                ReactiveFormsModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.ngOnInit();
        
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // TODO:
    it('should have a search field', () => {
      expect(component.searchTerm).toBeTruthy();
    });
    // TODO:
    it('should have a search button', () => { 
        
        const button = fixture.debugElement.query(By.css('.search-button')).nativeElement;
        button.click();
        fixture.detectChanges();
         expect(button).toBeTruthy();
    });

    // TODO:
    it('should have a category dropdown', () => {
        const category = component.filterCategeory(new Event('Change'));
        expect(category).toBeTruthy();
    });

    // TODO:
    it('should have an ingredient dropdown', () => {
         const ingredient = component.filterIngredient(new Event('Change'));

        expect(ingredient).toBeTruthy();
    });

    // TODO:
    it('should have an alcoholic dropdown', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should have a glass dropdown', () => {
        expect(false).toBeTruthy();
    });

    // TODO:
    it('should search for cocktails by name', () => {
      expect(false).toBeTruthy();
    });

    
});
