import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { etoileComponent } from './etoile.component';

describe('etoileComponent', () => {
  let component: etoileComponent;
  let fixture: ComponentFixture<etoileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ etoileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(etoileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
