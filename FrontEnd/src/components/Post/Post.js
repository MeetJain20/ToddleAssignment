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
    const isbookmark = useSelector((state) => state.isbookmarked);
    const searchvalue = useSelector((state) => state.searchtext2);
    const values = location.state;
    let boardDetails = useSelector(state =>
        state.board.find(board => board.boardid === values.boardid)
    );

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const filteredPosts = boardDetails.posts.filter(post =>
        post.title.toLowerCase().includes(searchvalue.toLowerCase())
    );


    return (
        <>
            <NavBar headtitle={isbookmark ? "Your Bookmarks" : values.title} />
            <div className="containpost" style={{ backgroundColor: `var(--${values.color})` }}>

                {boardDetails.posts.length === 0 ? (<><div className="tempcontainpost">
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

                        {isbookmark ? <div className="postcarddetails">
                            {filteredPosts.filter(post => post.bookmarked).map((post, postid) => {
                                return (
                                    <Postcard key={postid} boardid={values.boardid} postid={post.id} title={post.title} description={post.description} img={post.img} likecount={post.likecount} date={post.date}
                                        bookmarked={post.bookmarked} />
                                )
                            })}
                        </div> : <div className="postcarddetails">
                            {filteredPosts.map((post, postid) => {
                                return (
                                    <Postcard key={postid} boardid={values.boardid} postid={post.id} title={post.title} description={post.description} img={post.img} likecount={post.likecount} date={post.date} bookmarked={post.bookmarked} />
                                )
                            })}
                        </div>}</>
                )}
                <Modal isOpen={modalOpen} onClose={closeModal}>
                    <AddNewPost boardid={values.boardid} type="addnewpost" titlee="" descriptionn="" closeModal={closeModal} />
                </Modal>
            </div>
        </>
    )
}

export default Post
