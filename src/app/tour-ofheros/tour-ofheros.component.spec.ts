import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOfherosComponent } from './tour-ofheros.component';

describe('TourOfherosComponent', () => {
  let component: TourOfherosComponent;
  let fixture: ComponentFixture<TourOfherosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourOfherosComponent]
    });
    fixture = TestBed.createComponent(TourOfherosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
