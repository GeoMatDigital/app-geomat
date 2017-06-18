import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrystalsystemsComponent } from './crystalsystems.component';

describe('CrystalsystemsComponent', () => {
  let component: CrystalsystemsComponent;
  let fixture: ComponentFixture<CrystalsystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrystalsystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrystalsystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
