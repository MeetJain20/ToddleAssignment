import React, { useState, useRef, useEffect } from 'react';
import "./Boards.css";
import Threedots from "../../assets/DotsVerticalOutlined.svg";
import { useNavigate } from 'react-router-dom';
import Editlogo from "../../assets/PencilLineOutlined.svg";
import Deletelogo from "../../assets/Delete.svg";
import AddNewBoard from './AddNewBoard';
import Modal from '../ReUsable/Modal';
import { useDispatch, useSelector } from 'react-redux';

const Boards = (props) => {
    const dispatch = useDispatch();
    const clickBoxRef = useRef(null);
    const { color, name, postsArr, boardid } = props;
    const boardDetails = useSelector(state =>
        state.board.find(board => board.boardid === boardid)
    );


    const [funccss, setFunccss] = useState("none");
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const navigate = useNavigate();
    const functionalityHandler = () => {
        if (funccss === "none") {
            setFunccss("block");
        }
        else {
            setFunccss("none");
        }
    }

    const deleteboardHandler = () => {
        const newBoard = {
            boardId: boardDetails.boardid,
        };

        dispatch({
            type: 'DELETE_BOARD',
            payload: newBoard,
        });
        setFunccss("none");
    }

    const handlePosts = () => {
        const values = {
            boardid: boardid,
            title: name,
            color: color,
            posts: postsArr
        };
        navigate('/post', { state: values });
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (clickBoxRef.current && !clickBoxRef.current.contains(event.target)) {
                // Clicked outside the box
                setFunccss("none");
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="boarddetailsss">
                <div className="colorofboard" style={{ backgroundColor: `var(--${color})` }} onClick={handlePosts}>
                </div>
                <div className="tempppcontain">
                    <div className="nameofboard" onClick={handlePosts}>
                        {name}
                    </div>
                    <img src={Threedots} alt="Three_dots" className="optionsbutton" onClick={functionalityHandler} />
                </div>
                <div className="functionality" style={{ display: `${funccss}` }} ref={clickBoxRef}>
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
                    <div className="deletebutton" onClick={deleteboardHandler}>
                        <div className="deleteicon">
                            <img src={Deletelogo} alt="delete_logo" />
                        </div>
                        <div className="deletename">
                            Delete
                        </div>
                    </div>
                </div>
                <Modal isOpen={modalOpen} onClose={closeModal}>
                    <AddNewBoard boardid={boardid} titlee={boardDetails.title} colorr={boardDetails.color} type="editBoard" closeModal={closeModal} />
                </Modal>
            </div>
        </>
    )
}

export default Boards
