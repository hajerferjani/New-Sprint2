import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterreclamationComponent } from './consulterreclamation.component';

describe('ConsulterreclamationComponent', () => {
  let component: ConsulterreclamationComponent;
  let fixture: ComponentFixture<ConsulterreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterreclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
