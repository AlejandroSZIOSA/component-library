import { FaBeer } from "react-icons/fa";
import { AiFillAliwangwang } from "react-icons/ai";
import { AiFillAccountBook } from "react-icons/ai";
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
          /* border: "1px solid gray", */
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

  //Default props + children
  function CustomBadge({ children, color, size = "25px" }) {
    return (
      <div
        style={{
          display: "flex",
          width: "80px",
          height: "5px",
          padding: size,
          background: color,
          fontSize: "large",
          borderRadius: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children} Badge
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
          <CustomAlert color="yellow" icon="/src/assets/alert-icon2.png" />
          <CustomAlert color="green" icon="/src/assets/alert-icon3.png" />
        </div>

        <h2>Badge</h2>
        <div className="badge-container">
          <CustomBadge color="grey">
            <FaBeer size="40px" />
          </CustomBadge>
          <CustomBadge color="aqua" size="20px">
            <AiFillAliwangwang size="30px" />
          </CustomBadge>
          <CustomBadge color="orange" size="10px">
            <AiFillAccountBook size="20px" />
          </CustomBadge>
        </div>
      </div>
    </>
  );
}

export default App;
