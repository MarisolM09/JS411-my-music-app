import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "@mui/material/Button";
import CustomCard from "./components/Card";
import VolumeCard from "./components/VolumeCard";
import SoundCard from "./components/SoundCard";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isMaxVolume, setIsMaxVolume] = useState(false);

  return (
    <main>
      <Header title="My Music App" />
      {isLoggedIn === false ? (
        <div className="Input">
          <form className="form" action="">
            <Input label="Username" />
            <Input type="password" label="Password" />
            <Button
              className="button"
              variant="contained"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </Button>
          </form>
        </div>
      ) : (
        <section>
          <h2>Welcome User!</h2>
          <div className="dashboard-container">
            <CustomCard
              state={isToggled}
              setState={setIsToggled}
              title="Online Mode"
              body="Is this application connected to the internet?"
            />
            <VolumeCard
              state={isMaxVolume}
              setState={setIsMaxVolume}
              title="Master Volume"
              body="Is this application connected to the internet?"
            />
            <SoundCard
              title="Sound Quality"
              body="Manually conrol the music quality in event of poor connection."
            />
          </div>
          <h4>System Notifications:</h4>
          {isToggled === true && (
            <span>
              Your Application is offline. You won't be able to share or stream
              to other devices.{" "}
            </span>
          )}
        </section>
      )}
    </main>
  );
}

export default App;
