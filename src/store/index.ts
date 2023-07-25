import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import createSagaMiddleware from 'redux-saga';
import { useDispatch } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
