import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingSubsectionComponent } from './rendering-subsection.component';

describe('RenderingSubsectionComponent', () => {
  let component: RenderingSubsectionComponent;
  let fixture: ComponentFixture<RenderingSubsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderingSubsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderingSubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
