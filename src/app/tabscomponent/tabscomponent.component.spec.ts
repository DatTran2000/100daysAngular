import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabscomponentComponent } from './tabscomponent.component';

describe('TabscomponentComponent', () => {
  let component: TabscomponentComponent;
  let fixture: ComponentFixture<TabscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
