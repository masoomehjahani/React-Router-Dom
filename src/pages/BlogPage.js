import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const items =[
    {name:"blog -1", to:"/blogs/1" },
    {name:"blog -2", to:"/blogs/2" },
    {name:"blog -3", to:"/blogs/3" },
];

const BlogPage = () => {
    return (
        <div>
          this is blog
          {items.map( item => {
              return(
              <li key={item.to}>
                {/* search: harchi bad az ? biad optional =query string,
                 harchanta mitune bashe k ba & joda mishan. baraye transfer data beine routs
                 ye karbordesh: redirect cheked */}
                <Link to={{pathname:item.to , search:"sort=name" }}>
                  {item.name}
                 </Link>
              </li>)
          })}
          </div>
         );
}
 
export default BlogPage;