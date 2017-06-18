import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileList2Component } from './profile-list-2.component';

describe('ProfileList2Component', () => {
  let component: ProfileList2Component;
  let fixture: ComponentFixture<ProfileList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
