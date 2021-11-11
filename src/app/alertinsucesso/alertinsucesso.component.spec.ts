import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertinsucessoComponent } from './alertinsucesso.component';

describe('AlertinsucessoComponent', () => {
  let component: AlertinsucessoComponent;
  let fixture: ComponentFixture<AlertinsucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertinsucessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertinsucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
