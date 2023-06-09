import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, fetchPost } from "../../store/posts";
import { useHistory, Redirect, useParams } from "react-router-dom";
import PostsButton from "./PostButton";
import CommentIndex from "../Comments/CommentIndex";
import { paths } from "./PostIndex";
import './postShow.css';
import LikeIndex from "../Likes/LikeIndex";

const PostShow = () => {
    const {postId} = useParams();
    const dispatch = useDispatch();
    const post = useSelector(getPost(postId));
    let history = useHistory();
    const currentUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(fetchPost(postId));
    }, [dispatch, postId]);

    const goBack = () => {
        // history.goBack();
        let path = paths[0];
        history.push(path);
    };

    if(!currentUser) return <Redirect to={'/'} />

    if (!post) {
        return null;
    }
    
    return(
        <div id="container-post-show">
            <ul id="post-show">
                <div id="container-content">
                    <div>
                        <h3 id="content">{post.content}</h3>
                        {post.photoUrl !== null ? <img src={post.photoUrl} id="img-post" /> : '' }
                    </div>
                    {currentUser.id === post.authorId ? <label id="post-button"><PostsButton key={post.id} post={post} /></label> : undefined}
                </div>
                <br></br>
                
                <br></br>
                <LikeIndex user={currentUser} />
                <br></br>
                <CommentIndex user={currentUser} />
                <button onClick={goBack} id="go-back-button" >Go back</button>
            </ul>
        </div>
    )
};

export default PostShow;