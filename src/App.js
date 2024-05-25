import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Authentication from "./authentication/Authentication";
import { loginUser, setLoading } from "./features/userSlice";
import { auth } from "./firebase";
import Homepage from "./Homepage";

function App() {
  const dispatch = useDispatch();

  useEffect((authUser) => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("User is not logged in");
        dispatch(setLoading(false));
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>{user ? <Homepage /> : <Authentication />}</>
      )}
    </div>
  );
}

export default App;
