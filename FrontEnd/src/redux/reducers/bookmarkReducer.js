import BoardsDetail from "../../details/boards";

const initialState = false;

const bookmarkReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_BOARD':
            const { boardid, title, color } = action.payload;
            return state.map(board => board.boardid === boardid ? { ...board, title: title, color: color } : board)
        default:
            return state;
    }
};

export default bookmarkReducer;
