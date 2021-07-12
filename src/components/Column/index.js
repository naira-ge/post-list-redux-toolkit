import React from 'react';
import styles from './styles.module.scss';
import PostContent from '../PostContent/index'
import { FaPlus, FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";

const Column = (props) => {    

    return (
        <div className = {styles.columnContainer}>
            <div className = {styles.columnSorter}>
                {props.sortUp ? <FaSortAlphaDown /> : <FaSortAlphaUpAlt /> }
                <span >
                <FaPlus onClick={() => props.handleSelectPost()}/>
                </span>
            </div>
            <div>
                {props.selectedPost === null ? (<span>Select Post</span>) : 
                props.post.map((post) => <PostContent key = {post.id} post = {post} handleTogglePost = {props.handleTogglePost}/> )}
            </div>
        </div>
    )
}


export default Column

