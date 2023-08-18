import React, { useState } from 'react'
import NavBar from '../Navbar/Navbar'
import { useLocation } from 'react-router-dom';
import "./Post.css";
import Addlogo from "../../assets/AddOutlined.svg";
import EmptyJournal from "../../assets/EmptyJournal.svg";
import Modal from "../ReUsable/Modal";
import AddNewPost from './AddNewPost';


const Post = () => {
    const location = useLocation();
    const values = location.state;
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <NavBar headtitle={values.title} />
            <div className="containpost" style={{ backgroundColor: `var(--${values.color})` }}>
                <div className="tempcontainpost">
                    <div className="toplefthead">
                        Your Posts
                    </div>
                    <div className="newpost">
                        <button className="newpostbutt" onClick={openModal}>
                            <img src={Addlogo} className="addlogooo" alt="add_logo" />
                            Create new posts
                        </button>
                    </div>
                </div>
                <div className="bodywithnopost">
                    <div className="emptybinlogo">
                        <img src={EmptyJournal} alt="Empty_journal" />
                    </div>
                    <div className="nothingline">
                        Nothing here yet
                    </div>
                    <div className="nothingline2">
                        Create your first post by clicking on the '+' button above
                    </div>
                </div>
                <Modal isOpen={modalOpen} onClose={closeModal}>
                    <AddNewPost />
                </Modal>
            </div>
        </>
    )
}

export default Post
