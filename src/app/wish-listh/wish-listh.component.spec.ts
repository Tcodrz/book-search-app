import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListhComponent } from './wish-listh.component';

describe('WishListhComponent', () => {
  let component: WishListhComponent;
  let fixture: ComponentFixture<WishListhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishListhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
