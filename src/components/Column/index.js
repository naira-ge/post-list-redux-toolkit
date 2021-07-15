import React from 'react';
import styles from './styles.module.scss';
import PostContent from '../PostContent/index'
import { FaPlus, FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";

const Column = (props) => {    

    return (
        <div className = {styles.columnContainer}>
            <div className = {styles.columnSorter}>
                {props.sortUp ? <FaSortAlphaDown onClick = {() => props.setSort("asc")}/> : <FaSortAlphaUpAlt /> }
                <span >
                <FaPlus onClick={() => props.handleSelectPost(props.columnId)}/>
                </span>
            </div>
            <div>
                {props.post && props.post.map((post) => <PostContent 
                                                    key = {post.id} 
                                                    post = {post} 
                                                    postAver = {props.postAver}
                                                    handleTogglePost = {props.handleTogglePost}/> )}
            </div>
        </div>
    )
}


export default Column

