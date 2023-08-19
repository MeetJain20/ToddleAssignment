import React, { useState } from 'react';
import "./Postcard.css";
import Savelogo from "../../assets/Savelogo.svg";
import Threedots from "../../assets/DotsVerticalOutlined.svg";
import Heartlogo from "../../assets/likeheart.svg";
import Bookmark from "../../assets/Bookmark.svg";
import ColorHeart from "../../assets/Unionred.svg";
import Editlogo from "../../assets/PencilLineOutlined.svg";
import Deletelogo from "../../assets/Delete.svg";
import { useDispatch, useSelector } from 'react-redux';
import AddNewPost from './AddNewPost';
import Modal from '../ReUsable/Modal';


const Postcard = ({ title, description, img, likecount, boardid, postid, bookmarked }) => {
    const [flag, setFlag] = useState(1);
    const [flag1, setFlag1] = useState(1);
    const dispatch = useDispatch();

    const boardDetails = useSelector(state =>
        state.board.find(board => board.boardid === boardid)
    );
    const [funccss, setFunccss] = useState("none");
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const functionalityHandler = () => {
        if (funccss === "none") {
            setFunccss("block");
        }
        else {
            setFunccss("none");
        }
    }
    const deletepostHandler = () => {
        const newBoard = {
            boardId: boardDetails.boardid,
        };

        dispatch({
            type: 'DELETE_BOARD',
            payload: newBoard,
        });
        setFunccss("none");
    }
    const bookmarkHandler = () => {
        if (flag1) {
            dispatch({
                type: 'BOOKMARK_POST',
                payload: {
                    boardId: boardid,
                    postId: postid,
                },
            });
        }
        else {
            dispatch({
                type: 'UNBOOKMARK_POST',
                payload: {
                    boardId: boardid,
                    postId: postid,
                },
            });
        }
        setFlag1(!flag1);
    }
    const likeHandler = () => {
        // console.log(boardid, postid);
        if (flag) {
            dispatch({
                type: 'INCREMENT_LIKE',
                payload: {
                    boardId: boardid,
                    postId: postid,
                },
            });
        }
        else {
            dispatch({
                type: 'DECREMENT_LIKE',
                payload: {
                    boardId: boardid,
                    postId: postid,
                },
            });
        }
        setFlag(!flag);
    }
    return (
        <div className="post-card">
            <div className="cardtop">
                <div className="post-title">
                    {title}
                </div>
                <div className="savetocollection">
                    {!bookmarked ? <img src={Savelogo} alt="save_logo" onClick={bookmarkHandler} /> : <img src={Bookmark} alt="book_mark" onClick={bookmarkHandler} />}
                </div>
                <div className="editpostdetails" onClick={functionalityHandler}>
                    <img src={Threedots} alt="three_dots" />
                </div>
            </div>
            <div className="functionality2" style={{ display: `${funccss}` }}>
                <div className="editbutton" onClick={() => {
                    openModal()
                    setFunccss("none");
                }}>
                    <div className="editicon">
                        <img src={Editlogo} alt="edit_logo" />
                    </div>
                    <div className="editname">
                        Edit
                    </div>
                </div>
                <div className="deletebutton" onClick={deletepostHandler}>
                    <div className="deleteicon">
                        <img src={Deletelogo} alt="delete_logo" />
                    </div>
                    <div className="deletename">
                        Delete
                    </div>
                </div>
            </div>

            {/* <p className="post-muted-text">Muted Text</p> */}
            <div className="post-image">
                <img src="https://thumbs.dreamstime.com/b/spring-nature-scene-beautiful-landscape-tranquil-background-sunlight-scenic-beauty-meadow-backdrop-sunshine-green-grass-149811995.jpg" alt="Post" />
            </div>
            <p className="post-description">{description}</p>
            <div className="linedivvv"></div>
            <div className="likebutton">
                {flag ? <img src={Heartlogo} alt="heart_logo" onClick={likeHandler} /> : <img src={ColorHeart} alt="heart_logo" onClick={likeHandler} />}

                <div className="likecount" >
                    {likecount}
                </div>
            </div>
            <Modal isOpen={modalOpen} onClose={closeModal}>
                <AddNewPost postid={postid} type="editPost" closeModal={closeModal} />
            </Modal>
        </div>
    );
}

export default Postcard
