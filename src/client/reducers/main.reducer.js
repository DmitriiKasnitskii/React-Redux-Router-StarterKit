import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import sheetReducer from './sheet.reducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  sheetReducer
});

export default rootReducer;
