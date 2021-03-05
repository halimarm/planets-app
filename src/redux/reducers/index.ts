import { combineReducers } from 'redux';
import planetList from './PlanetList';
import planetInfo from './PlanetInfo';

const rootReducer = combineReducers({
  planetList,
  planetInfo
});

export default rootReducer;