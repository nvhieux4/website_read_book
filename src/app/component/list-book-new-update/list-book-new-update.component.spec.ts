import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookNewUpdateComponent } from './list-book-new-update.component';

describe('ListBookNewUpdateComponent', () => {
  let component: ListBookNewUpdateComponent;
  let fixture: ComponentFixture<ListBookNewUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookNewUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookNewUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
