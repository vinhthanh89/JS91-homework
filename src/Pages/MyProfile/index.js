import { Outlet } from "react-router-dom";

const MyProfile = () => {
  return (
    <div className="nav myprofile__menu">      
      <Outlet />
    </div>
  );
};

export default MyProfile;
