import { FaBeer } from "react-icons/fa";
import { AiFillAliwangwang } from "react-icons/ai";
import { AiFillAccountBook } from "react-icons/ai";
import "./App.css";

import cardImg1 from "./assets/card-images/img1.jpeg";
import cardImg2 from "./assets/card-images/img2.jpeg";
import cardImg3 from "./assets/card-images/img3.jpeg";
import cardImgAlt from "./assets/card-images/imgAlt.jpg";

//This is a custom component
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

//This is a custom component
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

/* This is a parent component using children component
    Default props + children */
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

//This is a parent component using children component
function CustomCard({ children, href, imgSrc, imgAlt }) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "300px",
      height: "400px",
      backgroundColor: "#EDEDED",
      border: "2px solid black",
      borderRadius: "5px",
    },
  };
  return (
    <div style={styles.container}>
      <a href={href}>
        <div>
          <img width="300px" height="200px" src={imgSrc} alt={imgAlt} />
        </div>
        {children}
      </a>
    </div>
  );
}

//This is a children component
function CustomCardContent() {
  const styles = {
    contentContainer: {
      display: "block",
      width: "100%",
      padding: "5px",
    },
  };
  return (
    <div style={styles.contentContainer}>
      <h2> Article Title</h2>
      <p>
        This is a paragraph, This is a paragraph, This is a paragraph , This is
        a paragraph, This is a paragraph, This is a paragraph
      </p>
    </div>
  );
}

function App() {
  //Main App Component
  return (
    <>
      <h1 style={{ padding: "5px" }}>
        Custom React Components [Using props + children]
      </h1>
      <div className="content-container">
        <h2>Buttons</h2>
        <div className="btn-container">
          <CustomBtn color="red" size="20px" />
          <CustomBtn color="gray" size="15px" />
          <CustomBtn color="orange" size="10" />
        </div>

        <h2>Alerts</h2>
        <div className="alerts-container">
          <CustomAlert
            color="red"
            icon="/src/assets/alert-icons/alert-icon1.png"
          />
          <CustomAlert
            color="yellow"
            icon="/src/assets/alert-icons/alert-icon2.png"
          />
          <CustomAlert
            color="green"
            icon="/src/assets/alert-icons/alert-icon3.png"
          />
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
        <div className="alerts-container">
          <CustomCard href="#" imgSrc={cardImg1} imgAlt={cardImgAlt}>
            <CustomCardContent />
          </CustomCard>

          <CustomCard href="#" imgSrc={cardImg2} imgAlt={cardImgAlt}>
            <CustomCardContent />
          </CustomCard>
          <CustomCard href="#" imgSrc={cardImg3} imgAlt={cardImgAlt}>
            <CustomCardContent />
          </CustomCard>
        </div>
      </div>
    </>
  );
}
export default App;
