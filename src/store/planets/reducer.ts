import { PlanetListActionTypes } from './types';
import { PlanetList, PlanetInfo } from './interfaces';


interface PlanetListState {
  data: PlanetList;
  page: number;
}

const planetListState: PlanetListState = {
  data: { count: 0, next: "", previous: "", results: [] },
  page: 1,
};

export const planetListReducer = (
  state = planetListState,
  action: PlanetListActionTypes
): PlanetListState => {
  switch (action.type) {
    case "SET_PLANET_LIST_DATA":
      return { ...state, data: action.planetList };
    case "SET_PAGE_NUMBER":
      return { ...state, page: action.pageNumber };
    default:
      return { ...state };
  }
};

interface PlanetInfoState {
  data: PlanetInfo;
}

const planetInfoState: PlanetInfoState = {
  data: {
    name: "", 
    rotation_period: "", 
    orbital_period: "", 
    diameter: "", 
    climate: "", 
    gravity: "", 
    terrain: "", 
    surface_water: "", 
    population: "", 
    residents: [], 
    films: [], 
    created: "", 
    edited: "", 
    url: ""
  }
};

export const planetInfoReducer = (
  state = planetInfoState,
  action: PlanetListActionTypes
): PlanetInfoState => {
  switch (action.type) {
    case "SET_PLANET_INFO_DATA":
      return { ...state, data: action.planetInfo };
    default:
      return { ...state };
  }
};

interface PlanetSearchState {
  data: PlanetList;
  page: number;
}

const planetSearchState: PlanetSearchState = {
  data: { count: 0, next: "", previous: "", results: [] },
  page: 1,
};

export const planetSearchReducer = (
  state = planetSearchState,
  action: PlanetListActionTypes
): PlanetSearchState => {
  switch (action.type) {
    case "SET_PLANET_SEARCH_DATA":
      return { ...state, data: action.planetSearch };
    case "SET_PAGE_NUMBER":
      return { ...state, page: action.pageNumber };
    default:
      return { ...state };
  }
};