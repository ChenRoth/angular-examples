import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReceiverComponent } from './event-receiver.component';

describe('EventReceiverComponent', () => {
  let component: EventReceiverComponent;
  let fixture: ComponentFixture<EventReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
