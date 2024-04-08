import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeStageComponent } from './resume-stage.component';

describe('ResumeStageComponent', () => {
  let component: ResumeStageComponent;
  let fixture: ComponentFixture<ResumeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeStageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
