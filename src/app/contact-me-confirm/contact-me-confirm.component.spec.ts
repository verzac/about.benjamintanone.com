import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeConfirmComponent } from './contact-me-confirm.component';

describe('ContactMeConfirmComponent', () => {
  let component: ContactMeConfirmComponent;
  let fixture: ComponentFixture<ContactMeConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMeConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMeConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
