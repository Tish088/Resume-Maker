import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const useMountEffect = (handleLogout) => useEffect(handleLogout, [handleLogout]);

const Logout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
//    Update global auth state
    setAuth({})
// Redirect to home page after logout
    navigate("/");
  };

  useMountEffect(handleLogout)
  return (
    // <button onClick={handleLogout}>Logout</button>
    <></>
  );
};

export default Logout;
