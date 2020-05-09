import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotAvailComponent } from './page-not-avail.component';

describe('PageNotAvailComponent', () => {
  let component: PageNotAvailComponent;
  let fixture: ComponentFixture<PageNotAvailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotAvailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotAvailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
