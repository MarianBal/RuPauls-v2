import { combineReducers } from 'redux';

import queens from './queens';
import congeniality from './congeniality';
import winners from './winners';

export default combineReducers({ queens, congeniality, winners });
