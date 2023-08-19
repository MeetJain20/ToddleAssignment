import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './reducers/boardReducer';
import bookmarkReducer from './reducers/bookmarkReducer';
import searchReducer from './reducers/searchReducer';
import searchReducer2 from './reducers/searchReducer2';

const store = configureStore({
    reducer: {
        board: boardReducer,
        isbookmarked: bookmarkReducer,
        searchtext: searchReducer,
        searchtext2: searchReducer2
    },
});

export default store;