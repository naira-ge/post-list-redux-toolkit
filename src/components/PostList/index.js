import React from 'react';
import styles from './styles.module.scss';
import PostContent from '../../components/PostContent/index';
import Comment from '../../components/Comment/index';
import AddComment from '../../components/AddComment/index';
import Rate from '../../components/Rate/index';

const PostList = (props) => {
console.log(props, 'props')

    const newCommentBody = props.postContents.newCommentBody;

    const onSendComment = () => {
        props.sendComment()
    }

    const onNewCommentChange = (e) => {
        let body = e.target.value;
        props.updateNewCommentBody(body);
    }

    const postsContents = props.postContents.posts.map((postInfo) => {
        return (
        <div className = {styles.postsDetails}  key  = {postInfo.id}>
            <PostContent info = {postInfo.info} />
            {/*postInfo.comments.map((c) => {
                return(
                <div className={styles.commentDetails} key = {c.comment_id}>
                    <div className={styles.commentRate} >
                        <Comment commentInfo = {c.comment}/>
                        <Rate rating = {c.rating} />
                    </div>
                    <AddComment value = {newCommentBody} 
                                onSendComment = {onSendComment}
                                onNewCommentChange = {onNewCommentChange}/>
                </div>
                )
            })*/}
        </div>
        )
    });

    return (
        <section className={styles.postsContainer}>
            <div className = {styles.pagination}>
                <span>1</span>
                <span className = {styles.selectedPage}>2</span>
                <span>3</span>
                <span>4</span>
            </div>
            <div className={styles.postContentContainer}>
                {postsContents}
            </div>
        </section>
        )
}

export default PostList;