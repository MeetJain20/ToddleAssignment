import React, { useState } from 'react';
import "./AddNewBoard.css";
import BoardsDetail from '../../details/boards';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const AddNewBoard = ({ boardid, titlee, colorr, type, closeModal }) => {
    const boardDetails = useSelector(state =>
        state.board.find(board => board.boardid === boardid)
    );

    const [color, setColor] = useState(colorr);
    const [title, setTitle] = useState(titlee);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const colorsArr = [
        {
            color: "blue",
        },
        {
            color: "violet",
        },
        {
            color: "pink",
        },
        {
            color: "yellow",
        }
    ]
    // const closeModal = () => setModalOpen(false);
    const addnewboardHandler = () => {
        // const newBoardId = Object.keys(BoardsDetail).length + 1;
        const existingMaxBoardId = Math.max(...BoardsDetail.map(board => board.boardid), 0);

        if (!boardDetails) {
            const newBoard = {
                boardid: existingMaxBoardId + 1,
                title: title,
                color: color,
                posts: [],
            };

            dispatch({
                type: 'ADD_NEW_BOARD',
                payload: newBoard,
            });
            setTitle("");
            setColor("");
            const values = {
                boardid: Object.keys(BoardsDetail).length + 1,
                title: title,
                color: color,
                posts: []
            };
            navigate("/post", { state: values })
        }
        else {

            const newBoard = {
                boardid: boardDetails.boardid,
                title: title,
                color: color,
            };

            dispatch({
                type: 'EDIT_BOARD',
                payload: newBoard,
            });
        }
        closeModal();
    }
    return (
        <div className="containerBoard">
            {titlee === "" ? <>
                <div className="nameofnewboard">
                    Add a name for your board
                </div>

                <div className="newboardtitle">
                    <input type="text" className="newboardtitle1" placeholder="Add Title.." value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div></>
                : <><div className="nameofnewboard">
                    Edit name for your board
                </div><div className="newboardtitle">
                        <input type="text" className="newboardtitle1" placeholder="Add Title.." value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    </div></>}

            {colorr === "" ? <div className="selectpostcolor">
                Select post colour
            </div> : <div className="selectpostcolor">
                Change post colour
            </div>}
            <div className="mutedtext">
                Here are some templates to get you started
            </div>

            <div className="coloroptions">

                {colorsArr.map((element) => {
                    return (<div key={element.color} className="colorsss" onClick={() => { setColor(element.color) }} style={{
                        border: `2px solid ${color === element.color ? "teal" : "white"}`,
                        backgroundColor: `var(--${element.color})`
                    }}>
                    </div>)
                })}

            </div>
            <div className="addboardbuttonn">
                <button className="addboardbuttonnew" onClick={addnewboardHandler}>
                    {!boardDetails ? "Create board" : "Edit Board"}
                </button>
            </div>
        </div>
    )
}

export default AddNewBoard
