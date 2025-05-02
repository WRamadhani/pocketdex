import { useInfiniteQuery } from "@tanstack/react-query";
import { pokeApiPokemonRepository } from "~/infrastructure/api/pokeapi/PokeApiPokemonRepository";

export const POKEMON_QUERY_KEY = "pokemonList";
export const POKEMON_PAGE_LIMIT = 20;

export function useGetPokemonListQuery() {
  return useInfiniteQuery({
    queryKey: [POKEMON_QUERY_KEY],
    queryFn: ({ pageParam = 0 }) => {
      return pokeApiPokemonRepository.getPokemonList(
        pageParam,
        POKEMON_PAGE_LIMIT
      );
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        const offset = url.searchParams.get("offset");
        return offset ? parseInt(offset, 10) : null;
      }
      return undefined;
    },
    initialPageParam: 0,
  });
}
