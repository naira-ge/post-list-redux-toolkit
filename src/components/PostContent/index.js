import React from 'react';
import { FaMinus } from "react-icons/fa";
import styles from './styles.module.scss';

const PostContent = (props) => {

        return (
            <div className = {styles.postContent}>
                <div className = {styles.contentInfo}>
                <p>{props.post.desc}</p> 
                </div> 
                <span>{props.postAver}</span>   
                <span className = {styles.toggle} onClick={() => props.handleTogglePost(props.post.id)}>
                <FaMinus />
                </span>
            </div>
        )
}

export default PostContent
