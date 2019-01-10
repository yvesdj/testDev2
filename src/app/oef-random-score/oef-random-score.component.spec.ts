import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefRandomScoreComponent } from './oef-random-score.component';

describe('OefRandomScoreComponent', () => {
  let component: OefRandomScoreComponent;
  let fixture: ComponentFixture<OefRandomScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefRandomScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefRandomScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
