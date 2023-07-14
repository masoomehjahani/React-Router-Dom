import React from "react";
import { Link, useLocation, useParams} from "react-router-dom";
import queryString from "query-string";

const Blog = (props) => {

    // to get params from url
    const params = useParams();

    // to get query string(search) 
    const location = useLocation();
   
    // to get sended data from query string
  const query=  queryString.parse(location.search);
//   console.log(query);
    
    
    return ( 
        <div>
        <h2>details... {params.id}</h2>
       <div> <Link to={`/blogs/${parseInt(params.id) + 1}`}> go to next page</Link>
       </div>
       <div>
        <Link to="/blogs"> go to blogs!</Link>
        </div>
        </div>
     );
}
 
export default Blog;