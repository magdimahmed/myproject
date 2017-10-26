import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantEntryComponent } from './restaurant-entry.component';

describe('RestaurantEntryComponent', () => {
  let component: RestaurantEntryComponent;
  let fixture: ComponentFixture<RestaurantEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
