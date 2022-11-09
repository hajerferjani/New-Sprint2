import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueRecComponent } from './historique-rec.component';

describe('HistoriqueRecComponent', () => {
  let component: HistoriqueRecComponent;
  let fixture: ComponentFixture<HistoriqueRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
