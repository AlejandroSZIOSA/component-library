import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function CustomBtn(props) {
    return (
      <div>
        <button
          style={{
            backgroundColor: props.color,
            padding: props.size,
            disabled: false,
          }}
        >
          Buttons
        </button>
      </div>
    );
  }

  function CustomAlert(props) {
    return (
      <div
        style={{
          display: "Flex",
          flexDirection: "row",
          backgroundColor: props.color,
          alignItems: "center",
          border: "1px solid gray",
          borderRadius: "10px",
        }}
      >
        <div style={{ padding: "10px" }}>
          <img width="40px" height="40px" src={props.icon}></img>
        </div>
        <div
          style={{
            fontSize: "xx-large",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
        >
          Alert Message
        </div>
      </div>
    );
  }

  return (
    <>
      <h1>Custom Components</h1>
      <div className="content-container">
        <h2>Buttons</h2>
        <div className="btn-container">
          <CustomBtn color="red" size="20px 15px 20px 15px" />
          <CustomBtn color="gray" size="10px 15px 10px 15px" />
          <CustomBtn color="orange" size="5px 25px 5px 25px" />
        </div>

        <h2>Alerts</h2>
        <div className="alerts-container">
          <CustomAlert color="red" icon="/src/assets/alert-icon1.png" />
          <CustomAlert color="blue" icon="/src/assets/alert-icon2.png" />
          <CustomAlert color="green" icon="/src/assets/alert-icon3.png" />
        </div>
      </div>
    </>
  );
}

export default App;
