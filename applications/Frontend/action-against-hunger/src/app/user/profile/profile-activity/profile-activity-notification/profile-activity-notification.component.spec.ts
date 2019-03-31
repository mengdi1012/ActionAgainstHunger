import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileActivityNotificationComponent } from './profile-activity-notification.component';

describe('ProfileActivityNotificationComponent', () => {
  let component: ProfileActivityNotificationComponent;
  let fixture: ComponentFixture<ProfileActivityNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileActivityNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileActivityNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
