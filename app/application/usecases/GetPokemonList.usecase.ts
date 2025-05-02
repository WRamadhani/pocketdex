import type { PokemonListResponse } from "~/domain/models/Pokemon";
import type { PokemonRepository } from "~/domain/repositories/PokemonRepository";

export class GetPokemonListUseCase {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  async execute(limit: number, offset: number): Promise<PokemonListResponse> {
    return this.pokemonRepository.getPokemonList(offset, limit);
  }
}
