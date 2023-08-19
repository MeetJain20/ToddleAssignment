const initialState = "";

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_TEXT_BOARD':
            return action.payload;
        default:
            return state;
    }
};

export default searchReducer;
