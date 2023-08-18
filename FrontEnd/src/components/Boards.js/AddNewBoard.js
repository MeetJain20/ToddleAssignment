import React, { useState } from 'react';
import "./AddNewBoard.css";

const AddNewBoard = () => {
    const [color, setColor] = useState("blue")
    return (
        <div className="containerr">
            <div className="nameofnewboard">
                Add a name for your board
            </div>
            <div className="newboardtitle">
                <input type="text" className="newboardtitle1" placeholder="Add Title.." />
            </div>
            <div className="selectpostcolor">
                Select post colour
            </div>
            <div className="mutedtext">
                Here are some templates to get you started
            </div>
            <div className="coloroptions">
                <div className="bluecolor" onClick={() => { setColor("blue") }} style={{ border: `2px solid ${color === "blue" ? "teal" : "white"}` }}>

                </div>
                <div className="violetcolor" onClick={() => { setColor("violet") }} style={{ border: `2px solid ${color === "violet" ? "teal" : "white"}` }}>

                </div>
                <div className="pinkcolor" onClick={() => { setColor("pink") }} style={{ border: `2px solid ${color === "pink" ? "teal" : "white"}` }}>

                </div>
                <div className="yellowcolor" onClick={() => { setColor("yellow") }} style={{ border: `2px solid ${color === "yellow" ? "teal" : "white"}` }}>

                </div>
            </div>
            <div className="addboardbuttonn">
                <button className="addboardbuttonnew">
                    Create board
                </button>
            </div>
        </div>
    )
}

export default AddNewBoard
