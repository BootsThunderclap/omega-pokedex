export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface ListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
}

export interface ListOptions {
  limit: number;
  offset: number;
}

export interface BerryFlavorMap {
  potency: number;
  flavor: NamedAPIResource;
}

export interface Berry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: NamedAPIResource;
  flavors: BerryFlavorMap[];
  item: NamedAPIResource;
  natural_gift_type: NamedAPIResource;
}

export interface BerryFirmness {
  id: number;
  name: string;
  berries: NamedAPIResource[];
  names: Name[];
}

export interface FlavorBerryMap {
  potency: number;
  berry: NamedAPIResource;
}

export interface BerryFlavor {
  id: number;
  name: string;
  berries: FlavorBerryMap[];
  contest_type: NamedAPIResource;
  names: Name[];
}

export interface ContestType {
  id: number;
  name: string;
  berry_flavor: NamedAPIResource;
  names: ContestName[];
}

export interface ContestName {
  name: string;
  color: string;
  language: NamedAPIResource;
}

export interface ContestEffect {
  id: number;
  appeal: number;
  jam: number;
  effect_entries: Effect[];
  flavor_text_entries: FlavorText[];
}

export interface SuperContestEffect {
  id: number;
  appeal: number;
  flavor_text_entries: FlavorText[];
  moves: NamedAPIResource[];
}

export interface EncounterMethod {
  id: number;
  name: string;
  order: number;
  names: Name[];
}

export interface EncounterCondition {
  id: number;
  name: string;
  names: Name[];
  values: NamedAPIResource[];
}

export interface Name {
  name: string;
  language: NamedAPIResource;
}

export interface Effect {
  effect: string;
  language: NamedAPIResource;
}

export interface FlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version: NamedAPIResource;
}
