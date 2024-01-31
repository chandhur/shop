import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFromComponent } from './task-from.component';

describe('TaskFromComponent', () => {
  let component: TaskFromComponent;
  let fixture: ComponentFixture<TaskFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
