import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonComComponent } from './pokemon-com.component';

describe('PokemonComComponent', () => {
  let component: PokemonComComponent;
  let fixture: ComponentFixture<PokemonComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
