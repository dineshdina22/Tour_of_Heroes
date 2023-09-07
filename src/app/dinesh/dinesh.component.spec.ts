import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DineshComponent } from './dinesh.component';

describe('DineshComponent', () => {
  let component: DineshComponent;
  let fixture: ComponentFixture<DineshComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DineshComponent]
    });
    fixture = TestBed.createComponent(DineshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
