import { PlanetList } from '../interfaces/Planet';
import { PlanetListActionTypes } from '../types/PlanetTypes';

interface DefaultState {
  data: PlanetList;
  page: number;
}

const defaultState: DefaultState = {
  data: { count: 0, next: "", previous: "", results: [] },
  page: 1,
};

const planetListReducer = (
  state = defaultState,
  action: PlanetListActionTypes
): DefaultState => {
  switch (action.type) {
    case "SET_PLANET_LIST_DATA":
      return { ...state, data: action.planetList };
    case "SET_PAGE_NUMBER":
      return { ...state, page: action.pageNumber };
    default:
      return { ...state };
  }
};

export default planetListReducer;