import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Dwnloads from "../components/Dwnloads";
import SideBar from "../components/SideBar";
import Layout from "../Layout/Layout";

const Profile = () => {
    return (
        <div>
            <p>this is your profile</p>
            <SideBar/>
            {/* nested routes: father=profile and children=dwnload , dashboard */}
            <Routes>
                <Route path="dashboard" element={<Dashboard/>} />
                <Route path="download" element={<Dwnloads/>} />
            </Routes>
        </div>
      );
}
 
export default Profile;