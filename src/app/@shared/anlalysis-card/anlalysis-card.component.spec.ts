import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnlalysisCardComponent } from './anlalysis-card.component';

describe('AnlalysisCardComponent', () => {
  let component: AnlalysisCardComponent;
  let fixture: ComponentFixture<AnlalysisCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnlalysisCardComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnlalysisCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
