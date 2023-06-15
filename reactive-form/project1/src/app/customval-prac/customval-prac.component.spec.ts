import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomvalPracComponent } from './customval-prac.component';

describe('CustomvalPracComponent', () => {
  let component: CustomvalPracComponent;
  let fixture: ComponentFixture<CustomvalPracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomvalPracComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomvalPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
