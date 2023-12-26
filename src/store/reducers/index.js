// third-party
import { combineReducers } from 'redux';

// project import
import auth from './auth';
import utils from './utils';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  auth,
  utils,
});

export default reducers;
