import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsQueryComponent } from './ans-query.component';

describe('AnsQueryComponent', () => {
  let component: AnsQueryComponent;
  let fixture: ComponentFixture<AnsQueryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnsQueryComponent]
    });
    fixture = TestBed.createComponent(AnsQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
