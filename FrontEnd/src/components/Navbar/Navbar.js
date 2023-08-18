import "./Navbar.css";
import React, { useState } from 'react';
import BrandLogo from "../../assets/Subtract.svg";
import Addlogo from "../../assets/AddOutlined.svg";
import Searchlogo from "../../assets/SearchOutlined.svg";
import Modal from "../ReUsable/Modal";
import AddNewBoard from "../Boards.js/AddNewBoard";

const NavBar = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return (
        <header className="navbar">
            <div className="navbar__title">
                <img src={BrandLogo} alt="brand_logo" />
                <div className="titleeeee">
                    toddle
                </div>
            </div>
            <div className="navbar__item">
                <div className="searchbarrrr">
                    <img src={Searchlogo} alt="search_logo" className="searchiconnnnn" />
                    <div className="inputboxxxxsearch">
                        <input type="text" className="inputboxxx" placeholder="Search..." />
                    </div>
                </div>
            </div>
            <div className="navbar__item">
                <button className="newboardbuttt" onClick={openModal}>
                    <img src={Addlogo} className="addlogooo" alt="add_logo" />
                    Create new board
                </button>
            </div>
            <Modal isOpen={modalOpen} onClose={closeModal}>
                <AddNewBoard />
            </Modal>
        </header>
    );
};

export default NavBar;
