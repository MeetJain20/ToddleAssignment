import React from 'react'
import "./Dashboard.css";
import BoardsDetail from '../../details/boards';

import Boards from '../Boards.js/Boards';
import { useSelector } from 'react-redux';
import NavBar from '../Navbar/Navbar';

const Dashboard = () => {
    const data = useSelector((state) => state.board);
    return (
        <>
            <NavBar headtitle="toddle" />
            <div>
                <div className="container">
                    <div className="headboards">
                        My boards
                    </div>
                    <div className="allboards">
                        {data.map((element) => {
                            return (
                                <Boards color={element.color} name={element.name} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
