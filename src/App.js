import React from "react";
import "./styles.css";
import logo from "./images/background-image/valorant3.jpeg";
import IdTag from "./components/IdTag";
import Comment from "./components/Comment";
import Rank from "./components/Rank";
import Agents from "./components/Agents";
import Images from "./components/Images";

function App() {
  const [imageChange, setImageChange] = React.useState(logo);
  const style = {
    backgroundImage: `url(${imageChange})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="main-container" style={style}>
        <div className="left-container">
          {<IdTag />}
          {<Rank />}
          <div className="favorite-container">
            <p>something</p>
            <input placeholder="somethig" value="" />
            <input placeholder="something" value="" />
          </div>
        </div>
        <div className="right-container">
          {<Agents imageChange={imageChange} setImageChange={setImageChange} />}
          {<Comment />}
        </div>
      </div>
    </>
  );
}

export default App;
