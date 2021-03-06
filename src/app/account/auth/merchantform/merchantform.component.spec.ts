import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantformComponent } from './merchantform.component';

describe('MerchantformComponent', () => {
  let component: MerchantformComponent;
  let fixture: ComponentFixture<MerchantformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
