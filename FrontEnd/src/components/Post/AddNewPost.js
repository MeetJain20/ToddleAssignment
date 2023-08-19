import React, { useState } from 'react'
import "./AddNewPost.css";
import { useSelector, useDispatch } from 'react-redux';


const AddNewPost = ({ boardid, postid, type, closeModal, titlee, descriptionn }) => {

    const [subject, setSubject] = useState(titlee);
    const [description, setDescription] = useState(descriptionn);
    // const fileRef = useRef(null);
    const [image1, setImage1] = useState(null);
    const onImageChange = (event) => {
        // console.log("meet", event);
        event.preventDefault();
        if (event.target.files && event.target.files[0]) {
            setImage1(URL.createObjectURL(event.target.files[0]));
        }
    };
    const dispatch = useDispatch();

    const postDetails = useSelector(state => {
        const boardDetails = state.board.find(board => board.boardid === boardid);
        if (boardDetails) {
            return boardDetails.posts.find(post => post.id === postid);
        }
        return null; // Post not found
    });
    // const navigate = useNavigate();
    const boardDetails = useSelector(state =>
        state.board.find(board => board.boardid === boardid)
    );
    const addnewpostHandler = () => {

        const existingMaxPostId = Math.max(...boardDetails.posts.map(post => post.id), 0);
        if (!postDetails) {
            const newPostId = existingMaxPostId + 1;
            console.log("alwergerg", newPostId);
            const newPost = {
                id: newPostId,
                title: subject,
                description: description,
                img: image1,
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
        }
        else {
            const newPost = {
                boardId: boardid,
                postId: postid,
                title: subject,
                description: description,
            };

            dispatch({
                type: 'EDIT_POST',
                payload: newPost,
            });
        }
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
            {titlee === "" ? <div className="addimagebox">
                {/* <div className="imagelogo">
                    <img src={Imagelogo} alt="Image_logo" />
                </div> */}
                <label className="addyourimage my-2">
                    <input
                        type="file"
                        className="addPict"
                        onChange={onImageChange}
                    // ref={fileRef}
                    />
                    Add your image
                </label>
                {image1 ?
                    <div className="tempimg">
                        <img src={image1} alt="selected_image" className="tempimg1" />
                    </div> : (<div></div>)}
            </div> : (<div></div>)}
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
                    {!postDetails ?
                        "Publish" : "Edit Details"}
                </button>
            </div>
        </div>
    )
}

export default AddNewPost
