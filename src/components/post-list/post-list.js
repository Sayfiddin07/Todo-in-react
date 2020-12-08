import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css'
import {ListGroupItem, ListGroup} from 'reactstrap'
const PostList =({posts, onDelete, onToggleImportant, onToggleLiked})=>{

    const items = posts.map((item)=>{
        const {id, ...itemProps} = item; 
        return (
            <ListGroupItem key={id} >
                <PostListItem 
                    {...itemProps}
                    onDelete={()=>onDelete(id)}
                    onToggleImportant={()=>{onToggleImportant(id)}}
                    onToggleLiked={()=>{onToggleLiked(id)}}
                    />
            </ListGroupItem>
        )
    });
    return  (
        <ListGroup className= "app-list">
            {items}
        </ListGroup>
    )
}
export default PostList