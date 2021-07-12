import React from 'react'
import styles from './styles.module.scss'

const Comment = (props) => {
    return (
        <div className = {styles.commentContainer}>
            <span className = {styles.commentTitle}>Comment:</span>
            <span>{props.comment}</span>
        </div>
    )
}



export default Comment

