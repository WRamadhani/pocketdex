import type { PokemonRepository } from "../../../domain/repositories/PokemonRepository";
import type {
  Pokemon,
  PokemonListResponse,
} from "../../../domain/models/Pokemon";
import type {
  PokeApiPokemonListDTO,
  PokeApiPokemonSpeciesDTO,
} from "./pokeapi.dto";
import {
  mapPokeApiPokemonListResponseToDomain,
  mapPokeApiPokemonListDtoToDomain,
} from "./pokeapi.mapper";

const BASE_URL = "https://pokeapi.co/api/v2/";

export class PokeApiPokemonRepository implements PokemonRepository {
  async getPokemonList(
    offset: number,
    limit: number
  ): Promise<PokemonListResponse> {
    try {
      const url = `${BASE_URL}pokemon?offset=${offset}&limit=${limit}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch Pokemon list: ${response.statusText}`);
      }
      const data: PokeApiPokemonListDTO = await response.json();
      const domainData = mapPokeApiPokemonListDtoToDomain(data);
      return domainData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getPokemonDetails(idOrName: number | string): Promise<Pokemon> {
    try {
      const url = `${BASE_URL}pokemon/${idOrName}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Pokemon details: ${response.statusText}`
        );
      }
      const data: Pokemon = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getPokemonListWithColor(
    offset: number,
    limit: number
  ): Promise<PokemonListResponse> {
    try {
      const listResponse = await this.getPokemonList(offset, limit);
      const pokemonList = listResponse.results;

      const pokemonSpecies: Promise<PokeApiPokemonSpeciesDTO>[] =
        pokemonList.map(async (pokemon) => {
          const response = await fetch(
            `${BASE_URL}pokemon-species/${pokemon.name}`
          );
          if (!response.ok) {
            throw new Error(
              `Failed to fetch Pokemon species: ${response.statusText}`
            );
          }
          const data: PokeApiPokemonSpeciesDTO = await response.json();
          return data;
        });

      const pokemonListWithColor = await Promise.all(pokemonSpecies).then(
        (responses) => {
          return responses.map((response) => {
            return {
              name: response.name,
              color: response.color.name,
            };
          });
        }
      );

      return {
        ...listResponse,
        results: pokemonListWithColor.map((item) => ({
          id: 0,
          ...item,
          url: `${BASE_URL}/pokemon/${item.name}`,
        })),
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export const pokeApiPokemonRepository = new PokeApiPokemonRepository();
