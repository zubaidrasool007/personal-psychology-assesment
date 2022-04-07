import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityTestQustionComponent } from './personality-test-qustion.component';

describe('PersonalityTestQustionComponent', () => {
  let component: PersonalityTestQustionComponent;
  let fixture: ComponentFixture<PersonalityTestQustionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityTestQustionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityTestQustionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
