import React from 'react';
import styles from './styles.module.scss';


const AddComment = (props) => {

    return (
        <form id = {props.id}
            onSubmit = {(e) => props.handleCreateNewComment(e, props.postId, props.index)} 
            className = {styles.addForm}>
            <input
                onChange = {(e) =>  props.handleNewCommentInput(e.currentTarget.value, props.postId, props.index)}
                className = {styles.commentInput} 
                value = {props.value}
                placeholder = "Add comment"
                type = "text" />
            <input 
                className = {styles.addBtn}
                type = "submit" value  = "Add"/>
        </form>
        )
}


export default AddComment;