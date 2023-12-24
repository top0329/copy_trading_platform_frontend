// third-party
import { combineReducers } from 'redux';

// project import
import auth from './auth';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  auth,
});

export default reducers;
