import { userReducer } from './user/userSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userReducer,
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
