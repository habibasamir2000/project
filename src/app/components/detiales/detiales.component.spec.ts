import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetialesComponent } from './detiales.component';

describe('DetialesComponent', () => {
  let component: DetialesComponent;
  let fixture: ComponentFixture<DetialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetialesComponent]
    });
    fixture = TestBed.createComponent(DetialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
