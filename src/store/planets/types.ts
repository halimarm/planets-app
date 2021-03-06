import { PlanetList, PlanetInfo } from "./interfaces";

export interface SetPlanetListData {
  type: "SET_PLANET_LIST_DATA";
  planetList: PlanetList;
}

export interface SetPlanetInfoData {
  type: "SET_PLANET_INFO_DATA";
  planetInfo: PlanetInfo;
}

export interface SetPlanetSearchData {
  type: "SET_PLANET_SEARCH_DATA";
  planetSearch: PlanetList;
}

export interface SetPageNumber {
  type: "SET_PAGE_NUMBER";
  pageNumber: number;
}

export type PlanetListActionTypes =
  | SetPlanetListData
  | SetPlanetInfoData
  | SetPlanetSearchData
  | SetPageNumber;

export type AppActions = PlanetListActionTypes