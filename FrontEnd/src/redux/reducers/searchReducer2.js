const initialState = "";

const searchReducer2 = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_TEXT_POST':
            return action.payload;
        default:
            return state;
    }
};

export default searchReducer2;
