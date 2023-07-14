import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Blog from "./components/Blog";
import PostPage from "./pages/PostPage";
import Dashboard from "./components/Dashboard";
import Dwnloads from "./components/Dwnloads";

const routes =[
    {path:"/", exact:"true" ,element: <HomePage/> },
    {path:"/about-us" ,element: <AboutUsPage/> },
    
    // profile define as father component
    {path:"/Profile/*" ,element: <Profile/> },
    {path:"/blogs" , element:<BlogPage/>},
    {path:"/blogs/:id" , element:<Blog/>},
    // optional param by :id? is bether dont use this
    // use query string instead of optional param
    {path:"/post" , element:<PostPage/>},
    {path:"/post/:id" , element:<PostPage/>},
    {path:"*" ,element: <NotFound/> },
];

export default routes;