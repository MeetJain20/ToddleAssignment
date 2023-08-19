import React, { useState, useRef } from 'react'
import "./AddNewPost.css";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const AddNewPost = ({ boardid, posts, closeModal }) => {

    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const fileRef = useRef(null);
    const [image1, setImage1] = useState(null);
    const onImageChange = async (event) => {
        // console.log("meet", event);
        event.preventDefault();
        if (event.target.files && event.target.files[0]) {
            setImage1(URL.createObjectURL(event.target.files[0]));
        }
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addnewpostHandler = () => {
        const newPostId = posts.length + 1;

        const newPost = {
            id: newPostId,
            title: subject,
            description: description,
            img: "",
            likecount: 0,
            bookmarked: false,
        };

        dispatch({
            type: 'ADD_NEW_POST',
            payload: {
                boardId: boardid,
                post: newPost,
            },
        });
        closeModal();
    }

    return (
        <div className="containerPost">
            <div className="nameofnewpost">
                Add a name for your board
            </div>
            <div className="writeforpost">
                Write something for your post
            </div>
            <div className="subjectpost">
                Subject
            </div>
            <div className="subjectforpost">
                <input type="text" className="subjectinputpost" placeholder="Add Title.." value={subject} onChange={(e) => { setSubject(e.target.value) }} />
            </div>
            <div className="addimagebox">
                {/* <div className="imagelogo">
                    <img src={Imagelogo} alt="Image_logo" />
                </div> */}
                <label className="addyourimage my-2">
                    <input
                        type="file"
                        className="addPict"
                        onChange={onImageChange}
                        ref={fileRef}
                    />
                    Add your image
                </label>
            </div>
            <div className="divideline"></div>
            <div className="postdesc">
                What's on your mind?
            </div>
            <textarea
                className="postdescription form-control"
                rows="3" placeholder="Type here" value={description} onChange={(e) => { setDescription(e.target.value) }}
            />
            <div className="addpostbuttonn">
                <button className="addpostbuttonnew" onClick={addnewpostHandler}>
                    Publish
                </button>
            </div>
        </div>
    )
}

export default AddNewPost
