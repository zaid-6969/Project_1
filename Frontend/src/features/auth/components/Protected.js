import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const { loading, user } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

//   if (loading) {
//     return (
//       <div>
//         <h1>Loading...</h1>
//       </div>
//     );
//   }

  if (!user) {
    return null;
  }

  return children;
};

export default Protected;