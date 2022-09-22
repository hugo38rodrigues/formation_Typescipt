import { useEffect, useState } from 'react'
import PostsList from '../components/PostsList'
import './Posts.css'
import {PostData} from '../Interface'


const Posts: React.FC =()=>{
    
    const [allPosts, setAllPosts]=useState<PostData[] | null>(null);
    const [numberOfPosts, setnumberOfPosts]=useState<number>(5);

    const localOrStateNumber=()=>localStorage.getItem('number')||numberOfPosts;
    const localOrStateNum= localOrStateNumber();

    useEffect(()=>{
        const getPosts= async () => {
            const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${localOrStateNum}`)
            const data: PostData[] = await response.json()
            setAllPosts(data)
        }
        getPosts();
    },[localOrStateNum]);

    const onChange = (e:React.ChangeEvent<HTMLInputElement>  )=>{
        setnumberOfPosts(+e.target.value)
        localStorage.setItem('number',e.target.value)
    }

    return (
        <div className="post-container">
        <h1>Page principale</h1>
        <div style={{display:'flex', flexDirection : 'column'}}>
            <label htmlFor="posts">Nombre de publication {localOrStateNum}  </label>
            <input type="range" min={1} max={20} onChange={onChange} defaultValue={localOrStateNum} />
            <PostsList allPosts={allPosts}/>
        </div>
        </div>
    )
}
export default Posts