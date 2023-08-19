import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './reducers/boardReducer';
import bookmarkReducer from './reducers/bookmarkReducer';

const store = configureStore({
    reducer: {
        board: boardReducer,
        isbookmarked: bookmarkReducer
    },
});

export default store;