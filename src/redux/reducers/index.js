import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import clients from './clients';

const rootReducer = combineReducers({
  clients,
  form: formReducer,
});

export default rootReducer;
