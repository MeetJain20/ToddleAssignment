import "./Navbar.css";
import React, { useState } from 'react';
import BrandLogo from "../../assets/Subtract.svg";
import Addlogo from "../../assets/AddOutlined.svg";
import Searchlogo from "../../assets/SearchOutlined.svg";
import Modal from "../ReUsable/Modal";
import AddNewBoard from "../Boards/AddNewBoard";
import Savelogo from "../../assets/Savelogo.svg";
import Bookmark from "../../assets/Bookmark.svg";
import Leftarrow from "../../assets/Leftarrow.svg";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

const NavBar = (props) => {
    const { headtitle } = props;
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    // const boardsData = useSelector((state) => state.board);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const navigate = useNavigate();
    const gotodashhandler = () => {
        navigate("/");
    }

    const isbookmark = useSelector((state) => state.isbookmarked);
    const searchvalue = useSelector((state) => state.searchtext);
    const searchvalue1 = useSelector((state) => state.searchtext2);

    const bookmarkHandler = () => {
        dispatch({
            type: 'IS_BOOKMARKED'
        });
    }

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

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
                            <input
                                type="text"
                                className="inputboxxx"
                                placeholder="Search..."
                                value={searchvalue}
                                onChange={(e) => {
                                    const newSearchValue = e.target.value;
                                    dispatch({
                                        type: "SEARCH_TEXT_BOARD",
                                        payload: newSearchValue  // Use payload instead of action
                                    });
                                }}
                            />
                        </div>
                    </div>) : (<><div className="search-container">
                        <div className={`search-input ${isSearchOpen ? 'active' : ''}`}>
                            <input type="text" placeholder="Search..."
                                value={searchvalue1}
                                onChange={(e) => {
                                    const newSearchValue1 = e.target.value;
                                    dispatch({
                                        type: "SEARCH_TEXT_POST",
                                        payload: newSearchValue1  // Use payload instead of action
                                    });
                                }} />
                        </div>
                        <div className={`search-icon ${isSearchOpen ? 'active' : ''}`} onClick={toggleSearch}>
                            <img src={Searchlogo} alt="search_logo" />
                        </div>

                    </div></>)
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
                        <div className="savelogo" onClick={bookmarkHandler} >
                            {isbookmark ?
                                <img src={Bookmark} alt="save_logo" className="savepostss" /> : <img src={Savelogo} alt="save_logo" className="savepostss" />}
                        </div>
                    </div>
                )}
            </div>
            <Modal isOpen={modalOpen} onClose={closeModal}>
                <AddNewBoard titlee="" colorr="blue" type="addnewboard" closeModal={closeModal} />
            </Modal>
        </header>
    );
};

export default NavBar;
