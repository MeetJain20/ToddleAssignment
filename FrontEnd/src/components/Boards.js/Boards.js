import React from 'react';
import "./Boards.css";
import Threedots from "../../assets/DotsVerticalOutlined.svg";
import Editlogo from "../../assets/PencilLineOutlined.svg";
import Deletelogo from "../../assets/Delete.svg";

const Boards = (props) => {
    const { color, name } = props;
    return (
        <>
            <div className="boarddetailsss">
                <div className="colorofboard" style={{ backgroundColor: `var(--${color})` }}>
                </div>
                <div className="tempppcontain">
                    <div className="nameofboard">
                        {name}
                    </div>
                    <img src={Threedots} alt="Three_dots" className="optionsbutton" />
                </div>
                {/* <div className="functionality">
                    <div className="editbutton">
                        <div className="editicon">
                            <img src={Editlogo} alt="edit_logo" />
                        </div>
                        <div className="editname">
                            Edit
                        </div>
                    </div>
                    <div className="deletebutton">
                        <div className="deleteicon">
                            <img src={Deletelogo} alt="delete_logo" />
                        </div>
                        <div className="deletename">
                            Delete
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Boards
