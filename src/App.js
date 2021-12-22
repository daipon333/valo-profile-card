import React from "react";
import "./styles.css";
import logo from "./images/valorant3.jpeg";
import IdTag from "./components/IdTag";

const style = {
  backgroundImage: `url(${logo})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

function App() {
  return (
    <>
      <div className="main-container" style={style}>
        <div className="left-container">
          {<IdTag />}
          <div className="rank-container">
            <p>RANK</p>
            <img src="...." />
            <img src="...." />
            <img src="...." />
            <img src="...." />
            <img src="...." />
            <img src="...." />
            <img src="...." />
            <img src="...." />
            <img src="...." />
          </div>
          <div className="favorite-container">
            <p>Favorite Weapon & Skin</p>
            <input placeholder="武器名を入力" value="" />
            <input placeholder="スキン名を入力" value="" />
          </div>
        </div>
        <div className="right-container">
          <div className="agent-container">
            <div className="duelist">
              <p>Duelist</p>
              <img src="..." />
              <img src="..." />
              <img src="..." />
              <img src="..." />
              <img src="..." />
            </div>

            <div className="initiator">
              <p>Initiator</p>
              <img src="..." />
              <img src="..." />
              <img src="..." />
              <img src="..." />
            </div>

            <div className="controller">
              <p>Controller</p>
              <img src="..." />
              <img src="..." />
              <img src="..." />
              <img src="..." />
            </div>

            <div className="sentinel">
              <p>Sentinel</p>
              <img src="..." />
              <img src="..." />
              <img src="..." />
            </div>
          </div>
          <div className="comment-container">
            <p>Comment</p>
            <textarea placeholder="自由にコメントを書こう！" />
            <button>決定</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
