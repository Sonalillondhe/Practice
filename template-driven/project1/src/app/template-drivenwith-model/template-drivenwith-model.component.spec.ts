import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenwithModelComponent } from './template-drivenwith-model.component';

describe('TemplateDrivenwithModelComponent', () => {
  let component: TemplateDrivenwithModelComponent;
  let fixture: ComponentFixture<TemplateDrivenwithModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenwithModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenwithModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
