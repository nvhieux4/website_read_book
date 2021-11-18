import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticComponent } from './authentic.component';

describe('AuthenticComponent', () => {
  let component: AuthenticComponent;
  let fixture: ComponentFixture<AuthenticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
