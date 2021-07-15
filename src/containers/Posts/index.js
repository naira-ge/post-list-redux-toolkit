import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostContent from '../../components/PostContent/index';
import Comment from '../../components/Comment/index';
import AddComment from '../../components/AddComment/index';
import Rate from '../../components/Rate/index';
import styles from './styles.module.scss';

import { withPosts } from '../../features/posts/reselect';

import {
    createPostActionCreator,
    createCommentActionCreator,
  } from '../../features/posts/postsSlice';


const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => withPosts(state.posts));
    const selectedPostId = useSelector((state) => state.selectedPost);
  
    const [newPostInput, setNewPostInput] = useState("");
    const [isAddPostMode, setIsAddPostMode] = useState(false);
    const addPostRef = useRef(null);

    const [newCommentInput, setNewCommentInput] = useState("");

  
    const selectedPost = (selectedPostId && 
      posts.find(post => post.id === selectedPostId)) || null;
  
    //new post create
    const handleNewInputChange = (e) => { 
      setIsAddPostMode(true);
      setNewPostInput(e.target.value); 
    };
    
    const handleCreateNewPost = (e) => {
      e.preventDefault();
      if(!newPostInput.length) return;
      
      dispatch(createPostActionCreator({desc: newPostInput}));
      setNewPostInput("");
    };

    //new comment create
    const handleNewCommentInput = (value, postId, index) => { 
      const postNewComment = posts.find(post => post.id === postId);
      console.log("newComment", "value", value, postNewComment);

      if(postNewComment) {
        setNewCommentInput(value); 
      }
    };

    const handleCreateNewComment = (e, postId, index) => {
      e.preventDefault();
      if(!newCommentInput.length) return;

      const newComment = posts.find(post => post.id === postId);
      if(newComment) {
        dispatch(createCommentActionCreator({text: newCommentInput,  id: postId, postIndex: index}));
        setNewCommentInput("");
      }
    };
  
    useEffect(() => {
      if(isAddPostMode) {
        addPostRef.current.focus();
      }
    }, [isAddPostMode]);


    return (
        <div className = {styles.postsContainer}>
            <div className = {styles.pagination}>
                <span>{selectedPostId || 0} of {posts.length}</span>
                {/*<span className = {styles.selectedPage}>2</span>*/}
            </div>
            <form className = {styles.addPost}
                onSubmit={handleCreateNewPost}>
                <input
                ref={addPostRef}
                onChange={handleNewInputChange}
                id = "new-post"
                value={newPostInput}
                placeholder ="Create New Post"
                />
            </form>
            <div className={styles.postContentContainer}>
                {posts.map((post, index) => {
                return(
                <div className = {styles.postContainer} key = {post.id}>
                  <PostContent  
                  post = {post} />
                <div className={styles.commentDetails} >
                  {/*post.comments.map((comment) => {
                    return (
                            <div className={styles.commentRate} key = {comment.comment_id}>
                                <Comment comment = {comment.text}/>
                                <Rate rate = {comment.rate} />
                            </div>
                        
                    )})*/}
                  <AddComment
                            index =  {index} 
                            postId = {post.id}
                            handleNewCommentInput = {handleNewCommentInput}
                            handleCreateNewComment = {handleCreateNewComment}
                            value = {newCommentInput} />
                </div>
              </div>)
              })}
            </div>
        </div>
    )
}

export default Posts;
