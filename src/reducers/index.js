
import { combineReducers } from 'redux';
import xyclone from './EditingReducer';
import { reducer as formReducer } from 'redux-form';


const reducers = {
  xyclone: xyclone
};

// const rootReducer = combineReducers({
//   xyclone,
//   formReducer
// })
const rootReducer = combineReducers(reducers);
export default rootReducer;
