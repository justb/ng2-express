import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchComponentComponent } from './hero-search-component.component';

describe('HeroSearchComponentComponent', () => {
  let component: HeroSearchComponentComponent;
  let fixture: ComponentFixture<HeroSearchComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSearchComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
