import React, { useState } from 'react'
import NavBar from '../Navbar/Navbar'
import { useLocation } from 'react-router-dom';
import "./Post.css";
import Addlogo from "../../assets/AddOutlined.svg";
import EmptyJournal from "../../assets/EmptyJournal.svg";
import Modal from "../ReUsable/Modal";
import AddNewPost from './AddNewPost';
import { useSelector } from 'react-redux';
import Postcard from './Postcard';


const Post = () => {
    const location = useLocation();
    const values = location.state;
    const boardsData = useSelector((state) => state.board);

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    // console.log(values.posts);

    return (
        <>
            <NavBar headtitle={values.title} />
            <div className="containpost" style={{ backgroundColor: `var(--${values.color})` }}>

                {boardsData[values.boardid - 1].posts.length === 0 ? (<><div className="tempcontainpost">
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
                    </div></>) : (
                    <>
                        <div className="newpost1">
                            <button className="newpostbutt1" onClick={openModal}>
                                <img src={Addlogo} className="addlogooo1" alt="add_logo" />
                                Create new posts
                            </button>
                        </div>
                        <div className="postcarddetails">
                            {boardsData[Math.max(values.boardid - 1, 0)].posts.map((post) => {
                                return (
                                    <Postcard boardid={values.boardid} postid={post.id} title={post.title} description={post.description} img={post.img} likecount={post.likecount} bookmarked={post.bookmarked} />
                                )
                            })}
                        </div></>
                )}
                <Modal isOpen={modalOpen} onClose={closeModal}>
                    <AddNewPost boardid={values.boardid} posts={values.posts} closeModal={closeModal} />
                </Modal>
            </div>
        </>
    )
}

export default Post
