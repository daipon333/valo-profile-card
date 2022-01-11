import React from "react";
import "./styles.css";
import logo from "./images/background-image/valorant3.jpeg";
import IdTag from "./components/IdTag";
import Comment from "./components/Comment";
import Rank from "./components/Rank";
import Agents from "./components/Agents";
import Images from "./components/Images";
import axios from "axios";

function App() {
  const [id, setId] = React.useState();
  const [newId, setNewId] = React.useState("");
  const [tag, setTag] = React.useState("");
  const [newTag, setNewTag] = React.useState("");
  const [imageChange, setImageChange] = React.useState(logo);
  const [display, setDisplay] = React.useState(true);

  const handleSubmitClick = () => {
    if (id === "") return;
    setNewId(id);
    setNewTag(tag);

    setDisplay((prev) => !prev);
  };

  const style = {
    backgroundImage: `url(${imageChange})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="main-container" style={style}>
        <div className="left-container">
          {
            <IdTag
              id={id}
              setId={setId}
              newId={newId}
              setNewId={setNewId}
              tag={tag}
              setTag={setTag}
              newTag={newTag}
              setNewTag={setNewTag}
              handleSubmitClick={handleSubmitClick}
              display={display}
              setDisplay={setDisplay}
            />
          }
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
