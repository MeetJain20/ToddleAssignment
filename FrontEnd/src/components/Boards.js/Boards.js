import React from 'react';
import "./Boards.css";
import Threedots from "../../assets/DotsVerticalOutlined.svg";
import { useNavigate } from 'react-router-dom';
// import Editlogo from "../../assets/PencilLineOutlined.svg";
// import Deletelogo from "../../assets/Delete.svg";

const Boards = (props) => {
    const navigate = useNavigate();
    const { color, name } = props;
    const handlePosts = () => {
        const values = {
            title: name,
            color: color,
        };
        navigate('/post', { state: values });
    }
    return (
        <>
            <div className="boarddetailsss">
                <div className="colorofboard" style={{ backgroundColor: `var(--${color})` }} onClick={handlePosts}>
                </div>
                <div className="tempppcontain">
                    <div className="nameofboard" onClick={handlePosts}>
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
