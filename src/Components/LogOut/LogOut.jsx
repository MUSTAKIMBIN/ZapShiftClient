import React from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const LogOut = () => {
  const { logOutUser } = useAuth();
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("Log Out Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={handleLogOut} className="btn">
        Log Out
      </button>
    </div>
  );
};

export default LogOut;
