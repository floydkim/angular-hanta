import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayContainerComponent } from './play-container.component';

describe('PlayContainerComponent', () => {
  let component: PlayContainerComponent;
  let fixture: ComponentFixture<PlayContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
