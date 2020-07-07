import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokupkiComponent } from './pokupki.component';

describe('PokupkiComponent', () => {
  let component: PokupkiComponent;
  let fixture: ComponentFixture<PokupkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokupkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokupkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
