import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignedQueryComponent } from './view-assigned-query.component';

describe('ViewAssignedQueryComponent', () => {
  let component: ViewAssignedQueryComponent;
  let fixture: ComponentFixture<ViewAssignedQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAssignedQueryComponent]
    });
    fixture = TestBed.createComponent(ViewAssignedQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
