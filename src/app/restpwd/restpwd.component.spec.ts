import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestpwdComponent } from './restpwd.component';

describe('RestpwdComponent', () => {
  let component: RestpwdComponent;
  let fixture: ComponentFixture<RestpwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestpwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
