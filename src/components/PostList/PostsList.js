import React from 'react';
import PostContent from '../../components/PostContent/index';
import Comment from '../../components/Comment/index';
import AddComment from '../../components/AddComment/index';
import Rate from '../../components/Rate/index';
import styles from './styles.module.scss';

const PostsList = (props) => {
    console.log("postList", props)
    return (
        <div className = {styles.postsContainer}>
            <div className = {styles.pagination}>
                <span>{props.postNumber} of {props.postLength}</span>
                {/*<span className = {styles.selectedPage}>2</span>*/}
            </div>
            <div className={styles.postContentContainer}>
                {props.posts.map((post) => {
                return(
                <div className = {styles.postContainer} key = {post.id}>
                <PostContent  
                post = {post}
                onPostClick = {props.onPostClick}
                updateStatus = {props.updateStatus} />
                {/*item.comments.map((comment) => {
                    return (
                        <div className={styles.commentDetails} key = {comment.comment_id}>
                            <div className={styles.commentRate} >
                                <Comment comment = {comment.text} />
                                <Rate rate = {comment.rate} />
                            </div>
                            <AddComment id = {comment.postId} onAdd={props.onAdd}/>
                </div>
                    )})*/}
                    </div>)
                })}
            </div>
        </div>
    )
}

export default PostsList
