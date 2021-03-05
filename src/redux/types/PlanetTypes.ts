import { PlanetList } from "../interfaces/Planet";
import { PlanetInfo } from "../interfaces/PlanetInfo";

export interface SetPlanetListData {
  type: "SET_PLANET_LIST_DATA";
  planetList: PlanetList;
}

export interface SetPlanetInfoData {
  type: "SET_PLANET_INFO_DATA";
  planetInfo: PlanetInfo;
}

export interface SetPageNumber {
  type: "SET_PAGE_NUMBER";
  pageNumber: number;
}

export type PlanetListActionTypes =
  | SetPlanetListData
  | SetPlanetInfoData
  | SetPageNumber;

export type AppActions = PlanetListActionTypes