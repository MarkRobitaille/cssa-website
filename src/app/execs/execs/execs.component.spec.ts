import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecsComponent } from './execs.component';

describe('ExecsComponent', () => {
  let component: ExecsComponent;
  let fixture: ComponentFixture<ExecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
