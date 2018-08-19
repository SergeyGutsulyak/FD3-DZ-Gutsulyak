import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssSpriteComponent } from './css-sprite.component';

describe('CssSpriteComponent', () => {
  let component: CssSpriteComponent;
  let fixture: ComponentFixture<CssSpriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssSpriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
