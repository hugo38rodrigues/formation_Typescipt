import {PostData} from "../Interface"
import {useNavigate}from "react-router-dom"

interface PostsListProps{
    allPosts : PostData[]|null;
}

const PostList: React.FC<PostsListProps> =({allPosts})=>{
    const navigate = useNavigate()
    return(
        <ul className="Posts">
            {allPosts?.map((post)=>(
            <li key={post.id} onClick={()=>navigate(`/${post.id}`)}>
                <h2>{post.title}</h2>
                <p>Lire l'article</p>
            </li>
           ))}
        </ul>
    )
}

export default PostList