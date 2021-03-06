export interface PlanetList {
  count: number;
  next: string;
  previous: string;
  results: PlanetInfo[];
}

export interface PlanetInfo {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}
