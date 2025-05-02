export interface PokemonItem {
  name: string;
  url: string;
}

export interface Abilities {
  id: number;
  name: string;
}

export interface PokemonTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonSpecies {
  color: {
    name: string;
    url: string;
  };
  evolution_chain: {
    url: string;
  };
  evolves_from_species: {
    name: string;
    url: string;
  };
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    };
  }[];
}

export interface PokemonSprites {
  front_default: string | null;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
}

export interface Pokemon {
  id: number;
  name: string;
  color: string;
  url: string;
  imageUrl?: string;
}

export interface PokemonListResponse {
  results: Pokemon[];
  next: string | null;
  previous: string | null;
  count: number;
}

// export interface PokemonListResponseWithColor extends PokemonListResponse {
//   results: {
//     name: string;
//     color: string;
//     url: string;
//   }[];
// }
