import type {
  PokeApiPokemonListDTO,
  PokeApiPokemonNameUrlDTO,
} from "./pokeapi.dto";

import type {
  Pokemon,
  PokemonItem,
  PokemonListResponse,
} from "../../../domain/models/Pokemon";

export const mapPokeApiPokemonListToPokemon = (
  pokemon: PokeApiPokemonNameUrlDTO
): Pokemon => {
  return {
    id: 1,
    name: pokemon.name,
    color: "red",
    url: pokemon.url,
    imageUrl: "",
  };
};

export const mapPokeApiPokemonListResponseToDomain = (
  pokemonList: PokeApiPokemonNameUrlDTO
) => {
  return {
    name: pokemonList.name,
    url: pokemonList.url,
  };
};

export const mapPokeApiPokemonListDtoToDomain = (
  pokemonList: PokeApiPokemonListDTO
): PokemonListResponse => {
  return {
    count: pokemonList.count,
    next: pokemonList.next,
    previous: pokemonList.previous,
    results: pokemonList.results.map(mapPokeApiPokemonListToPokemon),
  };
};

// export const mapPokeApiPokemonListResponseToDomain = (
//   pokemonList: PokeApiPokemonListDTO
// ) => {
//   return pokemonList.results.map(mapPokeApiPokemonListToPokemon);
// }
