import type {
  PokemonListResponse,
  Pokemon,
} from "../models/Pokemon";

export interface PokemonRepository {
  getPokemonList(offset: number, limit: number): Promise<PokemonListResponse>;
  // getPokemonListWithColor(
  //   offset: number,
  //   limit: number
  // ): Promise<PokemonListResponseWithColor>;
  // getPokemonDetails(idOrName: number | string): Promise<Pokemon>;
}
