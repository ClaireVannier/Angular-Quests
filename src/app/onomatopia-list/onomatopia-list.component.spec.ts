import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnomatopiaListComponent } from './onomatopia-list.component';

describe('OnomatopiaListComponent', () => {
  let component: OnomatopiaListComponent;
  let fixture: ComponentFixture<OnomatopiaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnomatopiaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnomatopiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
