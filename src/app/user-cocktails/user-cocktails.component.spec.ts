import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCocktailsComponent } from './user-cocktails.component';

describe('UserCocktailsComponent', () => {
  let component: UserCocktailsComponent;
  let fixture: ComponentFixture<UserCocktailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCocktailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
