import React from 'react';
import styles from './styles.module.scss';
import {useState} from 'react';

const AddComment = (props) => {
    //console.log('addcomment props', props);


    return (
        <form id = {props.id}
            onSubmit = {(e) => props.handleCreateNewComment(e, props.id)} 
            className = {styles.addForm}>
            <input
                onChange = {(e) =>  props.handleNewCommentInput(e, props.id)}
                className = {styles.commentInput} 
                value = {props.newCommentInput}
                placeholder = "Add comment"
                type = "text" />
            <input 
                className = {styles.addBtn}
                type = "submit" value  = "Add"/>
        </form>
        )
}


export default AddComment;