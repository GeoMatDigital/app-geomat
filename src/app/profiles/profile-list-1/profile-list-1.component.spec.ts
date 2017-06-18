import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileList1Component } from './profile-list-1.component';

describe('ProfileList1Component', () => {
  let component: ProfileList1Component;
  let fixture: ComponentFixture<ProfileList1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileList1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
