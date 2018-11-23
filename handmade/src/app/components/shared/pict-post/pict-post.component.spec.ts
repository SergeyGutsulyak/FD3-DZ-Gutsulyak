import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictPostComponent } from './pict-post.component';

describe('PictPostComponent', () => {
  let component: PictPostComponent;
  let fixture: ComponentFixture<PictPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
