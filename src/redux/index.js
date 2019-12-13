import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import mainReducer from './reducer';


export default history => combineReducers({
  router: connectRouter(history),
  mainReducer,
});

  