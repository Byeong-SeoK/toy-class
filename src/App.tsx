import React, { useState, useEffect } from "react";
import AppRouter from "./components/Router";
import { authService } from "./fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user: any) => {
      user ? setUserObj(user) : setUserObj(null);
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;
