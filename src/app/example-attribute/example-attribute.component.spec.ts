import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAttributeComponent } from './example-attribute.component';

describe('ExampleAttributeComponent', () => {
  let component: ExampleAttributeComponent;
  let fixture: ComponentFixture<ExampleAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
