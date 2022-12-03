import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestutilisateurComponent } from './gestutilisateur.component';

describe('GestutilisateurComponent', () => {
  let component: GestutilisateurComponent;
  let fixture: ComponentFixture<GestutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestutilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
