import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookChartsComponent } from './list-book-charts.component';

describe('ListBookChartsComponent', () => {
  let component: ListBookChartsComponent;
  let fixture: ComponentFixture<ListBookChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
