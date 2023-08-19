import React from 'react'
import "./Dashboard.css";
import Boards from '../Boards.js/Boards';
import { useSelector } from 'react-redux';
import NavBar from '../Navbar/Navbar';

const Dashboard = () => {
    // const data = useSelector((state) => state.board);
    const boardsData = useSelector((state) => state.board);
    return (
        <>
            <NavBar headtitle="toddle" />
            <div>
                <div className="container">
                    <div className="headboards">
                        My boards
                    </div>
                    <div className="allboards">
                        {Object.values(boardsData).map((board) => (
                            <Boards boardid={board.boardid} color={board.color} name={board.title} postsArr={board.posts} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
