import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostContent from '../../components/PostContent/index';
import Comment from '../../components/Comment/index';
import AddComment from '../../components/AddComment/index';
import Rate from '../../components/Rate/index';
import styles from './styles.module.scss';

import {
    createPostActionCreator,
    createCommentActionCreator,
    togglePostActionCreator,
  } from './postsSlice';


const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
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
    const handleNewCommentInput = (e, postId) => { 
      const newComment = posts.filter(post => post.id === postId);
      if(newComment) {
        setNewCommentInput(e.target.value); 
      }
    };

    const handleCreateNewComment = (e, postId) => {
      e.preventDefault();
      if(!newCommentInput.length) return;

      const newComment = posts.filter(post => post.id === postId);
      if(newComment) {
        dispatch(createCommentActionCreator({text: newCommentInput,  postId}));
        setNewCommentInput("");
      }
    };
  
    useEffect(() => {
      if(isAddPostMode) {
        addPostRef.current.focus();
      }
    }, [isAddPostMode]);
  
    const handleTogglePost = () => {
      if(!selectedPostId || !selectedPost) return;
  
      dispatch(togglePostActionCreator({
        id: selectedPostId, 
        isComplete:!selectedPost.isComplete,
      }))
    }


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
                {posts.filter(post => !post.isComplete).map((post) => {
                return(
                <div className = {styles.postContainer} key = {post.id}>
                  <PostContent  
                  post = {post}
                  handleTogglePost = {handleTogglePost}/>
                <div className={styles.commentDetails} >
                  {post.comments.map((comment) => {
                    return (
                            <div className={styles.commentRate} key = {comment.comment_id}>
                                <Comment comment = {comment.text}/>
                                <Rate rate = {comment.rate} />
                            </div>
                        
                    )})}
                  <AddComment 
                            id = {post.id}
                            handleNewCommentInput = {handleNewCommentInput}
                            handleCreateNewComment = {handleCreateNewComment}
                            newCommentInput = {newCommentInput} />
                </div>
              </div>)
              })}
            </div>
        </div>
    )
}

export default Posts;
