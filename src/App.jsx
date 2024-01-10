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

  function CustomCard() {
    const styles = {
      container: {
        display: "flex",
        flexDirection: "column",
      },
    };
    return (
      <div style={styles.container}>
        <div>
          <img
            width="400px"
            height="50px"
            src="./assets/card-images/img1.jpeg"
            alt="/assets/card-images/imgAlt.jpg"
          />
        </div>
        <div>
          <h5> Header</h5>
          <p> Description</p>
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
          <CustomBtn color="red" size="20px" />
          <CustomBtn color="gray" size="15px" />
          <CustomBtn color="orange" size="10" />
        </div>

        <h2>Alerts</h2>
        <div className="alerts-container">
          <CustomAlert color="red" icon="/src/assets/alert-icon1.png" />
          <CustomAlert color="yellow" icon="/src/assets/alert-icon2.png" />
          <CustomAlert color="green" icon="/src/assets/alert-icon3.png" />
        </div>

        <h2>Badges</h2>
        <div className="badges-container">
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

        <h2>Cards</h2>
        <div className="badges-container">
          <CustomCard />
        </div>
      </div>
    </>
  );
}

export default App;
