import { Dispatch } from "redux";
import { BASE_API } from "../../utils/Const";
import { PlanetList, PlanetInfo } from "./interfaces";
import { AppState } from "..";
import {
  AppActions,
  SetPageNumber,
  SetPlanetListData,
  SetPlanetInfoData,
} from "./types";

export const setPlanetListData = (
  planetList: PlanetList
): SetPlanetListData => ({
  type: "SET_PLANET_LIST_DATA",
  planetList
});

export const setPlanetInfoData = (
  planetInfo: PlanetInfo
): SetPlanetInfoData => ({
  type: "SET_PLANET_INFO_DATA",
  planetInfo
})

export const setPageNumber = (pageNumber: number): SetPageNumber => ({
  type: "SET_PAGE_NUMBER",
  pageNumber
});

export const fetchPlanetList = (pageNumber: number = 1) => (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  dispatch(setPageNumber(pageNumber));

  fetch(`${BASE_API}/planets/?page=${pageNumber}`, {
    method: "GET"
  })
    .then(res => res.json())
    .then((res: PlanetList) => {
      dispatch(setPlanetListData(res));
    })
    .catch(err => {
      console.warn(err);
    });
};

export const fetchPlanetInfo = (id: string) => (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  fetch(`${BASE_API}/planets/${id}`, {
    method: "GET"
  })
    .then(res => res.json())
    .then((res: PlanetInfo) => {
      dispatch(setPlanetInfoData(res));
    })
    .catch(err => {
      console.warn(err);
    });
};