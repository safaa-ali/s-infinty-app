import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SInfintyLayoutComponent } from './s-infinty-layout.component';

describe('SInfintyLayoutComponent', () => {
  let component: SInfintyLayoutComponent;
  let fixture: ComponentFixture<SInfintyLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SInfintyLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SInfintyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
