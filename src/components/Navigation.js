import React from "react";
import { Link ,useNavigate,NavLink } from "react-router-dom";
// import { withRouter } from "react-router";
// use link from react router to page dont reload and dont refresh when change rout.
// withRouter: withRouter will pass updated match, location,
//  and history props to the wrapped component whenever it renders,
// This gives the Header component access to this.props.history, which means the header can now redirect the user.

export const withRouter = (Component) => {
	const Wrapper = (props) => {
		const history = useNavigate();
		return <Component history={history} {...props} />;
	};
	return Wrapper;
};

const Navigation = (props) => {
    const item =[
      {name: "Home" , to:"/", exact:true,},
      {name: "About-us" , to:"/about-us",},
      {name: "Profile" , to:"/Profile",},
      {name: "blogs" , to:"/blogs",},
      {name: "post" , to:"/post",},
    ];

    return ( 
        <nav>
          <ul>
            {item.map((item) =>{
             return(
               <li key={item.to}>
                <NavLink 
                to={item.to} 
                className={(navData) =>
                   (navData.isActive ? "activeLink" : "")
                }
                exact = {item.exact || false}
                >
                {item.name}
                </NavLink>
               </li>
             )
            })}
          </ul>
        </nav>
      );
}
 
export default withRouter(Navigation);