import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCocktailsComponent } from './all-cocktails.component';

describe('AllCocktailsComponent', () => {
  let component: AllCocktailsComponent;
  let fixture: ComponentFixture<AllCocktailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCocktailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
