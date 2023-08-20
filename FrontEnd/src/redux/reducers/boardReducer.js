import BoardsDetail from "../../details/boards";

const initialState = Object.values(BoardsDetail);

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_BOARD':
            return [...state, action.payload];
        case 'EDIT_BOARD':
            const { boardid, title, color } = action.payload;
            return state.map(board => board.boardid === boardid ? { ...board, title: title, color: color } : board)
        case 'DELETE_BOARD':
            const { boardId: deleteBoardId } = action.payload;
            return state.filter(board => board.boardid !== deleteBoardId);
        case 'ADD_NEW_POST':
            const { boardId, post } = action.payload;
            return state.map(board => board.boardid === boardId ? { ...board, posts: [...board.posts, post] } : board)
        case 'EDIT_POST':
            const { boardId: editBoardId, postId: editPostId, title: newTitle, description: newDescription } = action.payload;
            return state.map(board => {
                if (board.boardid === editBoardId) {
                    const updatedPosts = board.posts.map(post => {
                        if (post.id === editPostId) {
                            return {
                                ...post,
                                title: newTitle,
                                description: newDescription
                            };
                        }
                        return post;
                    });
                    return { ...board, posts: updatedPosts };
                }
                return board;
            });
        case 'DELETE_POST':
            const { boardId: delPostId, postId: deletePostId } = action.payload;
            return state.map(board =>
                board.boardid === delPostId
                    ? {
                        ...board,
                        posts: board.posts.filter(post => post.id !== deletePostId),
                    }
                    : board
            );
        case 'INCREMENT_LIKE':
            const { boardId: incrementBoardId, postId: incrementPostId } = action.payload;
            return state.map((board) =>
                board.boardid === incrementBoardId
                    ? {
                        ...board,
                        posts: board.posts.map((post) =>
                            post.id === incrementPostId
                                ? { ...post, likecount: post.likecount + 1 }
                                : post
                        ),
                    }
                    : board
            );
        case 'DECREMENT_LIKE':
            const { boardId: decrementBoardId, postId: decrementPostId } = action.payload;
            return state.map((board) =>
                board.boardid === decrementBoardId
                    ? {
                        ...board,
                        posts: board.posts.map((post) =>
                            post.id === decrementPostId
                                ? { ...post, likecount: Math.max(0, post.likecount - 1) }
                                : post
                        ),
                    }
                    : board
            );
        case 'BOOKMARK_POST':
            const { boardId: bookBoardId, postId: bookPostId } = action.payload;
            return state.map((board) =>
                board.boardid === bookBoardId
                    ? {
                        ...board,
                        posts: board.posts.map((post) =>
                            post.id === bookPostId
                                ? { ...post, bookmarked: true }
                                : post
                        ),
                    }
                    : board
            );
        case 'UNBOOKMARK_POST':
            const { boardId: unbookBoardId, postId: unbookPostId } = action.payload;
            return state.map((board) =>
                board.boardid === unbookBoardId
                    ? {
                        ...board,
                        posts: board.posts.map((post) =>
                            post.id === unbookPostId
                                ? { ...post, bookmarked: false }
                                : post
                        ),
                    }
                    : board
            );
        default:
            return state;
    }
};

export default boardReducer;
