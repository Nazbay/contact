import { applyMiddleware, combineReducers, createStore } from 'redux';
import { userReducer } from './reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
   key: 'root',
   storage,
}

const rootReducer = combineReducers({
   users:userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistore = persistStore(store)
export {persistore}


