import React from "react";

import type { Route } from "./+types/pokemonList";
import { useGetPokemonListQuery } from "~/infrastructure/react-query/hooks/useGetPokemonListQuery";
import { pokeApiPokemonRepository } from "~/infrastructure/api/pokeapi/PokeApiPokemonRepository";
import { queryClient } from "~/infrastructure/react-query/queryClient";
import type { PokemonListResponse } from "~/domain/models/Pokemon";
import { useUiStore } from "~/infrastructure/state/uiStore";

const POKEMON_PAGE_LIMIT = 20;

export function clientLoader() {
  console.log("Loader: pokemonListLoader executing...");
  // Example: Extract search params if needed for filtering API-side
  // const url = new URL(request.url);
  // const searchTerm = url.searchParams.get("q");

  // We use fetchInfiniteQuery here to ensure the *first page* is cached.
  // Subsequent pages are fetched via the hook in the component.
  const queryOptions = {
    queryKey: ["pokemonList"],
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

  // Check cache first (optional optimization)
  const cachedData = queryClient.getQueryData(queryOptions.queryKey);
  if (cachedData) {
    console.log(
      "Loader: Found cached data for list, potentially returning early/not fetching"
    );
    // You could return cachedData here if you want, but fetchInfiniteQuery handles staleness.
    // return cachedData;
  }

  console.log("Loader: Calling fetchInfiniteQuery for list...");
  // Ensure data is fetched and cached. Doesn't suspend, returns promise.
  // We await it to ensure fetch completes before navigation proceeds.
  const data = queryClient.fetchInfiniteQuery(queryOptions);
  console.log("Loader: fetchInfiniteQuery for list completed.");

  // You MUST return something from a loader, often the data or null.
  // Returning the data makes it available via useLoaderData.
  return data;
  // Alternatively, return null and rely solely on useInfiniteQuery in the component.
//   return null;

  //   if (status === "error") {
  //     return <div>Error: {error.message}</div>;
  //   }

  //   return data;
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
  //   const data = loaderData;
//   console.log(data);
  const searchTerm = useUiStore((state) => state);
    const setSearchTerm = useUiStore((state) => state.setSearchTerm);
  
    const handleSearchTermChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setSearchTerm(event.target.value);
    };
  
    
  
    // console.log(data?.pages.map((group, i) => group.results));
  
    return (
      <div>
        <h2>Pokemon Detail List</h2>
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
        <a href="/about">asd</a>
      </div>
    );
}
