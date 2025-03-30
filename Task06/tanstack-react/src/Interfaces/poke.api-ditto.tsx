interface abilitiesType {
  ability: Record<string, string>;
  is_hidden: boolean;
  slot: number;
}
interface criesType {
  latest: string;
  legacy: string;
}
interface itemType {
  name: string;
  url: string;
}

interface version_detailsType {
  rarity: number;
  version: itemType;
}
interface game_inidicesType {
  game_index: number;
  version: itemType;
}
interface held_itemsType {
  item: itemType;
  version_details: version_detailsType[];
}
interface version_group_detailsType {
  level_learned_at: number;
  move_learner_method: itemType;
  order: null | string | number;
  version_group: itemType;
}
interface moveType {
  move: itemType;
  version_group_details: version_group_detailsType[];
}
interface sprite_otherType {
  dream_world: {
    front_default: string;
    front_female: string;
  };
  home: {
    front_default: string;
    front_femaile: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  "official-artwork": {
    front_default: string;
    front_shiny: string;
  };
  showdown: {
    back_default: string;
    back_femaile: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_femaile: string;
    front_shiny: string;
    front_shiny_female: string;
  };
}

interface spritesType {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: sprite_otherType;
  versions: Record<
    string,
    string | Record<string, string | Record<string, string>>
  >;
}
interface statType {
  base_start: number;
  effort: number;
  stat: itemType;
}
interface typeType {
  slot: number;
  type: itemType;
}
export interface pokeType {
  abilities: abilitiesType[];
  base_experience: number;
  cries: criesType[];
  forms: itemType[];
  game_indices: game_inidicesType[];
  height: number;
  held_items: held_itemsType[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: moveType[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: itemType[];
  sprites: spritesType[];
  stats: statType[];
  types: typeType[];
  weight: number;
}

export interface TableType {
  id: number;
  Field_Name: string;
  Field_Type: string /*  */;
  length: number;
}
