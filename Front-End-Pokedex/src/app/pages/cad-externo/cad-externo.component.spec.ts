import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadExternoComponent } from './cad-externo.component';

describe('CadExternoComponent', () => {
  let component: CadExternoComponent;
  let fixture: ComponentFixture<CadExternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadExternoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
