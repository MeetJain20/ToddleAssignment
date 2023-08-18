
// import Boards from "../../components/Boards.js/Boards";
import BoardsDetail from "../../details/boards";

const initialState = BoardsDetail;

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_BOARD':
            return [...state, action.payload];
        default:
            return state;
    }
};

export default boardReducer;