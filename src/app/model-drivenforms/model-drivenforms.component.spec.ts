import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenformsComponent } from './model-drivenforms.component';

describe('ModelDrivenformsComponent', () => {
  let component: ModelDrivenformsComponent;
  let fixture: ComponentFixture<ModelDrivenformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDrivenformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
