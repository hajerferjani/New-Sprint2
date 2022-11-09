import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesecuriteComponent } from './codesecurite.component';

describe('CodesecuriteComponent', () => {
  let component: CodesecuriteComponent;
  let fixture: ComponentFixture<CodesecuriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodesecuriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodesecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
