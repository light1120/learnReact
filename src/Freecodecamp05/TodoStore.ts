import { configureStore } from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { TTodoState, TodoSlice } from './TodoStoreSlice';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
}

// export const todoStore = configureStore({
//     reducer: {
//         todos: TodoSlice.reducer
//     },
// });

/**
 * user redux-persist middleware
 */
export const todoStore = configureStore({
    reducer: {
        todos: persistReducer<TTodoState>(persistConfig, TodoSlice.reducer)
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(todoStore);

export type RootState = ReturnType<typeof todoStore.getState>
export type RootDispatch = typeof todoStore.dispatch