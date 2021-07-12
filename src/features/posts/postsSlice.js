import { v1 as uuid } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const postsInitialState = [
    {
        id: uuid(),
        desc: "Learn React",
        isComplete: false,
        comments: [
            { comment_id: 1, text: 'Learn React comments', rate: 5 },
            { comment_id: 2, text: 'Learn React comments', rate: 9 },
        ]
    },
    {
        id: uuid(),
        desc: "Learn Redux",
        isComplete: false,
        comments: [
            { comment_id: 1, text: 'Learn Redux comments', rate: 5 },
            { comment_id: 2, text: 'Learn Redux comments', rate: 9 },
        ]
    },
    {
        id: uuid(),
        desc: "Learn Redux-ToolKit",
        isComplete: false,
        comments: [
            { comment_id: 1, text: 'Learn Redux-ToolKit comments', rate: 5 },
            { comment_id: 2, text: 'Learn Redux-ToolKit comments', rate: 9 },
        ]
    }
];

const postsSlice = createSlice({
    name:'posts',
    initialState: postsInitialState,
    reducers: {
        createPost: {
            reducer: (state, {payload}) => (
                [...state, payload]
            ),
            prepare: ({desc}) => ({
                payload: {
                    id:uuid(),
                    desc,
                    isComplete:false,
                    comments: "",
                }
            }),
        },
        createComment: {
            reducer: (state, {payload}) => (
                [...state.payload.postId, payload]
            ),
            prepare: ({text, postId}) => ({
                payload: {
                    comments: {
                        comment_id:uuid(),
                        text, 
                        rate:1,
                    }
                }
            }),
        },
        edit: (state, action) => {
            const postEdit = state.find(post => post.id === action.payload.id);
            if(postEdit) {
                postEdit.desc = action.payload.desc;
            }
        },
        toggle: (state, action) => {
            const postToggle = state.find(post => post.id === action.payload.id);
            if(postToggle) {
                postToggle.isComplete = action.payload.isComplete;
            }
        },
        search: (state, {payload}) => {

            const searchValue = state.filter(post => {
                return post.desc.toLowerCase.includes(payload.value) || 
                post.comments.filter(comment => {
                    return comment.text.toLowerCase.includes(payload.value)
                })
            });
            
            return searchValue;
        },
        filter: (state, action) => {
            const filterPost = action.payload.direction === "asc" ?
            sortAsc(state, 'desc') :
            sortDesc(state, 'desc');

            return filterPost;
        }
    }
});


//ascending order
function sortAsc (arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) {
            return 1;
        }
        if (b[field]> a[field]) {
            return -1;
        }
        return 0;
    })
};

//descending order
function sortDesc (arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) {
            return -1;
        }
        if (b[field]> a[field]) {
            return 1;
        }
        return 0;
    })
 }

export const {
    createPost: createPostActionCreator,  
    createComment: createCommentActionCreator,  
    edit: editPostActionCreator,
    search: filterBySearch,
    toggle: togglePostActionCreator} = postsSlice.actions;

export const selectPosts = (state) => state.post.value;


export default postsSlice.reducer;