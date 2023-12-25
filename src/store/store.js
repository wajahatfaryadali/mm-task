import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducer/rootReducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['/* add any reducer keys you want to exclude from persistence */'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
const persistor = persistStore(store);

export { store, persistor };





// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducer/rootReducer';

// const store = configureStore({
//     reducer: rootReducer,
//     middleware: getDefaultMiddleware => getDefaultMiddleware({
//         serializableCheck: false
//     })

// });

// export default store;