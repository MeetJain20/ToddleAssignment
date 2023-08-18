import React from 'react'
import "./Dashboard.css";
import BoardsDetail from '../../details/boards';

import Boards from '../Boards.js/Boards';


const Dashboard = () => {
    return (
        <div>
            <div className="container">
                <div className="headboards">
                    My boards
                </div>
                <div className="allboards">
                    {BoardsDetail.map((element) => {
                        return (
                            <Boards color={element.color} name={element.name} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
