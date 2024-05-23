import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcocktailsListComponent } from './newcocktails-list.component';

describe('NewcocktailsListComponent', () => {
  let component: NewcocktailsListComponent;
  let fixture: ComponentFixture<NewcocktailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewcocktailsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewcocktailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
