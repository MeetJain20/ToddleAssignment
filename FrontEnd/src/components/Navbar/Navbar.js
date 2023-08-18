import "./Navbar.css";
import React, { useState } from 'react';
import BrandLogo from "../../assets/Subtract.svg";
import Addlogo from "../../assets/AddOutlined.svg";
import Searchlogo from "../../assets/SearchOutlined.svg";
import Modal from "../ReUsable/Modal";
import AddNewBoard from "../Boards.js/AddNewBoard";
import Savelogo from "../../assets/Savelogo.svg";
import Leftarrow from "../../assets/Leftarrow.svg";
import { useNavigate } from "react-router";

const NavBar = (props) => {
    const { headtitle } = props;
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const navigate = useNavigate();
    const gotodashhandler = () => {
        navigate("/");
    }

    return (
        <header className="navbar">
            {headtitle !== "toddle" ? (
                <img src={Leftarrow} alt="Left_arrow" className="leftarrowicon" onClick={gotodashhandler} />
            ) : (
                <div></div>
            )}
            <div className="navbar__title">

                <img src={BrandLogo} alt="brand_logo" />
                {headtitle === "toddle" ? (<div className="titleeeee">{headtitle}
                </div>) : (<div className="titleeeee2">
                    {headtitle}
                </div>)}
            </div>
            <div className="navbar__item">
                {headtitle === "toddle" ?
                    (<div className="searchbarrrr">
                        <img src={Searchlogo} alt="search_logo" className="searchiconnnnn" />
                        <div className="inputboxxxxsearch">
                            <input type="text" className="inputboxxx" placeholder="Search..." />
                        </div>
                    </div>) : (<div className="searchbarr2">
                        <img src={Searchlogo} alt="search_logo" className="searchiconnnnn" />
                    </div>)
                }
            </div>
            <div className="navbar__item">
                {headtitle === "toddle" ? (<button className="newboardbuttt" onClick={openModal}>
                    <img src={Addlogo} className="addlogooo" alt="add_logo" />
                    Create new board
                </button>) : (
                    <div className="leftcorner">
                        <div className="divider">
                            |
                        </div>
                        <div className="savelogo">
                            <img src={Savelogo} alt="save_logo" />
                        </div>
                    </div>

                )}
            </div>
            <Modal isOpen={modalOpen} onClose={closeModal}>
                <AddNewBoard />
            </Modal>
        </header>
    );
};

export default NavBar;
