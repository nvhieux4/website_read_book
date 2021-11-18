import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookHistoryComponent } from './list-book-history.component';

describe('ListBookHistoryComponent', () => {
  let component: ListBookHistoryComponent;
  let fixture: ComponentFixture<ListBookHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
