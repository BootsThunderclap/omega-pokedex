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

export interface Name {
  name: string;
  language: NamedAPIResource;
}
