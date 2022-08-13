import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "@mui/material/Button";
import CustomCard from "./components/Card";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
//   const [isMaxVolume, setIsMaxVolume] = useState(false);

  return (
    <main>
      <Header title="My Music App" />
      <div className="music-app">
        {isLoggedIn === false ? (
          <form className="form" action="">
            <Input label="Username" />
            <Input type="password" label="Password" />
            <Button
              className="button"
              variant="contained"
              onClick={() => setIsLoggedIn(true)}>
              Login
            </Button>
          </form>
        ) : (
          <div className="dashboard-container">
            <h2>Welcome User!</h2>
            <CustomCard
              state={isToggled}
              setState={setIsToggled}
              title="Online Mode"
              body="Is this application connected to the internet?"
              component={Switch}
            />
            <CustomCard
              state={isToggled}
              setState={setIsToggled}
              title="Master Volume"
              body="Is this application connected to the internet?"
              component={Slider}
            />
            {/* // Where our cards will go */}
            <h4>System Notifications:</h4>
            {isToggled === true && (
              <span>
                Your Application is offline. You won't be able to share or
                stream to other devices.{" "}
              </span>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
