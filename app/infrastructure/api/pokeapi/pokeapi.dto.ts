export interface PokeApiPokemonNameUrlDTO {
  name: string;
  url: string;
}

export interface PokeApiPokemonTypeDTO {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokeApiPokemonListDTO {
  count: number;
  next: string;
  previous: string;
  results: PokeApiPokemonNameUrlDTO[];
}

export interface PokeApiPokemonAbilitiesDTO {
  id: number;
  name: string;
}

export interface PokeApiPokemonDetailsDTO {
  abilities: PokeApiPokemonAbilitiesDTO[];
  cries: {
    latest: string;
    legacy: string;
  };
  forms: PokeApiPokemonNameUrlDTO[];
  game_indices: {
    game_index: number;
    version: PokeApiPokemonNameUrlDTO;
  }[];
  height: number;
  held_items: {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      rarity: number;
      version: PokeApiPokemonNameUrlDTO;
    }[];
  }[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: PokeApiPokemonNameUrlDTO;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: PokeApiPokemonNameUrlDTO;
      version_group: PokeApiPokemonNameUrlDTO;
    }[];
  }[];
  name: string;
  order: number;
  past_abilities: {
    abilities: {
      ability: string | null;
      is_hidden: boolean;
      slot: number;
    }[];
    generation: PokeApiPokemonNameUrlDTO;
  }[];
  past_types: {
    generation: PokeApiPokemonNameUrlDTO;
    types: PokeApiPokemonTypeDTO[];
  }[];
  species: PokeApiPokemonNameUrlDTO;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: PokeApiPokemonNameUrlDTO;
  }[];
  types: PokeApiPokemonTypeDTO[];
  weight: number;
}

export interface PokeApiPokemonSpeciesDTO {
  base_happiness: number;
  capture_rate: number;
  color: PokeApiPokemonNameUrlDTO;
  egg_groups: PokeApiPokemonNameUrlDTO[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: PokeApiPokemonNameUrlDTO;
  flavor_text_entries: {
    flavor_text: string;
    language: PokeApiPokemonNameUrlDTO;
    version: PokeApiPokemonNameUrlDTO;
  }[];
  form_descriptions: {
    description: string;
    language: PokeApiPokemonNameUrlDTO;
  }[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: PokeApiPokemonNameUrlDTO;
  }[];
  generation: PokeApiPokemonNameUrlDTO;
  growth_rate: PokeApiPokemonNameUrlDTO;
  habitat: PokeApiPokemonNameUrlDTO;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: {
    language: PokeApiPokemonNameUrlDTO;
    name: string;
  }[];
  order: number;
  pal_park_encounters: {
    area: PokeApiPokemonNameUrlDTO;
    base_score: number;
    rate: number;
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: PokeApiPokemonNameUrlDTO;
  }[];
  shape: PokeApiPokemonNameUrlDTO;
  varieties: {
    is_default: boolean;
    pokemon: PokeApiPokemonNameUrlDTO;
  }[];
}

export interface PokeApiPokemonDTO {}
