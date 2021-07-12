import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Column from '../../components/Column/index';
import styles from './styles.module.scss';

import { 
    selectPostActionCreator,
} from './selectedPostSlice.js';

import {
    togglePostActionCreator,
   } from '../posts/postsSlice';

const SelectedPost = () => {
    const posts = useSelector((state) => state.posts);
    const selectedPostId = useSelector((state) => state.selectedPost);
    const dispatch = useDispatch();

    const [sortUp, setSortUp] = useState(true);

    const selectedPost = (selectedPostId && 
        posts.find(post => post.id === selectedPostId)) || [];
        console.log("posts", posts, "selectedPost", selectedPost);

    const handleTogglePost = (postId) => () => {
            if (!selectedPostId || !selectedPost) return;
    
            dispatch(togglePostActionCreator({
                id: postId,
                isComplete: !posts[postId].isComplete
            }))
    };

    const handleSelectPost = () => {
        dispatch(selectPostActionCreator({ id: posts.length - 1 }));

        dispatch(togglePostActionCreator({
            id: posts.length - 1,
            isComplete: !posts[posts.length - 1].isComplete
        }));
    };


    return (
        <section className = {styles.columnsContainer}>
            <Column post = {selectedPost} 
                    handleSelectPost = {handleSelectPost}
                    sortUp = {sortUp}/>  
            <Column 
                    post = {selectedPost} 
                    handleSelectPost = {handleSelectPost}
                    sortUp = {sortUp}/>
        </section>
    )
}



export default SelectedPost

