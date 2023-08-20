import React from 'react';
import "./Dashboard.css";
import Boards from '../Boards/Boards';
import { useSelector } from 'react-redux';
import NavBar from '../Navbar/Navbar';

const Dashboard = () => {
    const boardsData = useSelector((state) => state.board);
    const searchvalue = useSelector((state) => state.searchtext);

    const filteredBoards = Object.values(boardsData).filter(board => board.title.toLowerCase().includes(searchvalue.toLowerCase()));

    return (
        <>
            <NavBar headtitle="toddle" />
            <div>
                <div className="container">
                    <div className="headboards">
                        My boards
                    </div>
                    <div className="allboards">
                        {filteredBoards.map((board) => (
                            <Boards boardid={board.boardid} color={board.color} name={board.title} postsArr={board.posts} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
