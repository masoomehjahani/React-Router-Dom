import { useParams } from "react-router-dom";

const PostPage = () => {
    const params = useParams();
    const id= params.id || 1;
    return ( 
        <>
        <h2> post detail {id}</h2>
        <div> {JSON.stringify(params)} </div>
        </>
     );
}
 
export default PostPage;