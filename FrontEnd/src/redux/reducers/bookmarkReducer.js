
const initialState = false;

const bookmarkReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_BOOKMARKED':
            return !state;
        default:
            return state;
    }
};

export default bookmarkReducer;
