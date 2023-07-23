import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState("moon");
  const [tcolor, setTcolor] = useState("dark");
  const [bcolor, setBcolor] = useState("light");
  const handleDarkTheme = () => {
    if (theme === "sun") {
      setTheme("moon");
      setBcolor("light");
      setTcolor("dark");
      document.body.style.backgroundColor = "white";
    } else {
      setTheme("sun");
      setBcolor("dark");
      setTcolor("light");
      document.body.style.backgroundColor = "#3a3b3c";
    }
  };
  return (
    <Router>
      <Navbar theme={theme} handleDarkTheme={handleDarkTheme} />
      <LoadingBar color="#f11946" height={3} progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              apikey={apikey}
              setProgress={setProgress}
              tcolor={tcolor}
              bcolor={bcolor}
              key="Home"
              home="Home"
              pageSize={9}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/Business"
          element={
            <News
              tcolor={tcolor}
              bcolor={bcolor}
              apikey={apikey}
              setProgress={setProgress}
              key="Business"
              pageSize={9}
              country="in"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/Entertainment"
          element={
            <News
              tcolor={tcolor}
              bcolor={bcolor}
              apikey={apikey}
              setProgress={setProgress}
              key="Entertainment"
              pageSize={9}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/General"
          element={
            <News
              tcolor={tcolor}
              bcolor={bcolor}
              apikey={apikey}
              setProgress={setProgress}
              key="General"
              pageSize={9}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/Health"
          element={
            <News
              tcolor={tcolor}
              bcolor={bcolor}
              apikey={apikey}
              setProgress={setProgress}
              key="Health"
              pageSize={9}
              country="in"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/Science"
          element={
            <News
              tcolor={tcolor}
              bcolor={bcolor}
              apikey={apikey}
              setProgress={setProgress}
              key="Science"
              pageSize={9}
              country="in"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/Sports"
          element={
            <News
              tcolor={tcolor}
              bcolor={bcolor}
              apikey={apikey}
              setProgress={setProgress}
              key="Sports"
              pageSize={9}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/Technology"
          element={
            <News
              tcolor={tcolor}
              bcolor={bcolor}
              apikey={apikey}
              setProgress={setProgress}
              key="Technology"
              pageSize={9}
              country="in"
              category="technology"
            />
          }
        />
        {/* forced remount by giving unique key so that it will understand that it has to  remount the component*/}
      </Routes>
    </Router>
  );
};

export default App;
//JSX WILL BE CHANGED TO HTML(BY RENDER METHOD) AND WILL BE RENDERED BY THE RENDER METHOD
