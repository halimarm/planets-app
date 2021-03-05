import { PlanetInfo } from '../interfaces/PlanetInfo';
import { PlanetListActionTypes } from '../types/PlanetTypes';

interface DefaultState {
  data: PlanetInfo;
}

const defaultState: DefaultState = {
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

const planetInfoReducer = (
  state = defaultState,
  action: PlanetListActionTypes
): DefaultState => {
  switch (action.type) {
    case "SET_PLANET_INFO_DATA":
      return { ...state, data: action.planetInfo };
    default:
      return { ...state };
  }
};

export default planetInfoReducer;