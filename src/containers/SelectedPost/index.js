import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Column from '../../components/Column/index';
import styles from './styles.module.scss';

import { withSelectedPostsColumn1, withSelectedPostsColumn2, getPostAver1, getPostAver2 } from '../../features/posts/reselect';

import {
    togglePostActionCreator,
    columnAddActionCreator,
    filterActionCreator
   } from '../../features/posts/postsSlice';

const SelectedPost = () => {

    const selectedPostColumn1 = useSelector((state) => withSelectedPostsColumn1(state.posts));
    const postAver1 = useSelector((state) => getPostAver1(state.posts));

    const selectedPostColumn2 = useSelector((state) => withSelectedPostsColumn2(state.posts));
    const postAver2 = useSelector((state) => getPostAver2(state.posts));
    

    const dispatch = useDispatch();

    const [sortUp, setSortUp] = useState(true);

    const handleTogglePost = (postId) => {
            dispatch(togglePostActionCreator({id: postId}))
    };

    const handleSelectPost = (columnId) => {

        dispatch(columnAddActionCreator({id: columnId}));
    };

    const setSort = (direction) => {
        dispatch(filterActionCreator(direction))
        setSortUp(!sortUp)
    }


    return (
        <section className = {styles.columnsContainer}>
            <Column columnId = "column1"
                    post = {selectedPostColumn1} 
                    handleSelectPost = {handleSelectPost}
                    handleTogglePost = {handleTogglePost}
                    sortUp = {sortUp}
                    postAver = {postAver1}
                    setSort = {setSort}/>  
            <Column columnId = "column2"
                    post = {selectedPostColumn2} 
                    handleSelectPost = {handleSelectPost}
                    handleTogglePost = {handleTogglePost}
                    sortUp = {sortUp}
                    postAver = {postAver2}
                    setSort = {setSort}/>
        </section>
    )
}



export default SelectedPost

