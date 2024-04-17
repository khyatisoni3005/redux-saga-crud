import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_USER_PENDING } from "./redux-saga/user/action/action";
import Home from "./components/Home";

function App() {


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: GET_USER_PENDING })
  }, [])
  return (
    <>
      <Home />
    </>
  );
}

export default App;
