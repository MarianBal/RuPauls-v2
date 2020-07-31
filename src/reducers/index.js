import { combineReducers } from 'redux';

import queens from './queens';
import congeniality from './congeniality';
import winners from './winners';
import season from './season';
import singleQueen from './singleQueen';

export default combineReducers({
  queens,
  congeniality,
  winners,
  season,
  singleQueen
});
