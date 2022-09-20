import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import PostDetail from "../components/PostDetail";
import {PostData}from "../Interface"
const Post = ()=>{
    type PostParams ={
        id:string
    };
    const {id}  =useParams<PostParams>();

    const[ onePost, setOnePost]=useState<PostData | null>(null)
    useEffect(()=>{
        const getPost= async () => {
            const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data: PostData = await response.json()
            setOnePost(data)
        }
        getPost();
    },[id]);
    return (
        <div className="post-container">
            <h1>Detail de la publication</h1>
            <PostDetail onePost={onePost}/>
        </div>
    )
}

export default Post