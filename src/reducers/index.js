import { combineReducers } from 'redux';

import queens from './queens';
import congeniality from './congeniality';
import winners from './winners';
import season from './season';

export default combineReducers({ queens, congeniality, winners, season });
