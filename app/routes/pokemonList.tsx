import React from "react";

import type { Route } from "./+types/pokemonList";
import type { PokemonListResponse } from "~/domain/models/Pokemon";

import {
  useGetPokemonListQuery,
  POKEMON_PAGE_LIMIT,
  POKEMON_QUERY_KEY,
} from "~/infrastructure/react-query/hooks/useGetPokemonListQuery";
import { pokeApiPokemonRepository } from "~/infrastructure/api/pokeapi/PokeApiPokemonRepository";
import { queryClient } from "~/infrastructure/react-query/queryClient";
import { useUiStore } from "~/infrastructure/state/uiStore";

export function clientLoader() {
  console.log("Loader: pokemonListLoader executing...");

  const queryOptions = {
    queryKey: [POKEMON_QUERY_KEY],
    queryFn: ({ pageParam = 0 }) => {
      const offset = pageParam;
      console.log(`Loader QueryFn: Fetching page with offset: ${offset}`);
      return pokeApiPokemonRepository.getPokemonList(
        offset,
        POKEMON_PAGE_LIMIT
      );
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage: PokemonListResponse) =>
      lastPage.next ?? undefined,
  };

  //   const cachedData = queryClient.getQueryData(queryOptions.queryKey);
  //   if (cachedData) {
  //     console.log(
  //       "Loader: Found cached data for list, potentially returning early/not fetching"
  //     );
  //   }

  console.log("Loader: Calling fetchInfiniteQuery for list...");

  const data = queryClient.fetchInfiniteQuery(queryOptions);
  console.log("Loader: fetchInfiniteQuery for list completed.");

  return data;
}

export default function PokemonList({ loaderData }: Route.ComponentProps) {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useGetPokemonListQuery();

  if (status === "pending") {
    return <div>Loading...</div>;
  }
  //   const data = loaderData;
  console.log(data);

  const searchTerm = useUiStore((state) => state);
  const setSearchTerm = useUiStore((state) => state.setSearchTerm);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Pokemon List</h2>
      {data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.results.map((pokemon) => (
            <div key={pokemon.name}>
              <div>{pokemon.name}</div>
              <div>{pokemon.color}</div>
            </div>
          ))}
        </React.Fragment>
      ))}
      <button
        onClick={() => {
          fetchNextPage()
            .then(() => {})
            .catch(() => {});
        }}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button>
    </div>
  );
}
