import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksSubsectionComponent } from './hooks-subsection.component';

describe('HooksSubsectionComponent', () => {
  let component: HooksSubsectionComponent;
  let fixture: ComponentFixture<HooksSubsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HooksSubsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HooksSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
