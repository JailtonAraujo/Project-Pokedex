import { TestBed } from '@angular/core/testing';

import { PokemonBackEndService } from './pokemon-back-end.service';

describe('PokemonBackEndService', () => {
  let service: PokemonBackEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonBackEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
