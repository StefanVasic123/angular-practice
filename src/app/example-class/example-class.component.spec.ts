import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleClassComponent } from './example-class.component';

describe('ExampleClassComponent', () => {
  let component: ExampleClassComponent;
  let fixture: ComponentFixture<ExampleClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
