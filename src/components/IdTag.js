import "../styles.css";
import React from "react";

function IdTag() {
  const [id, setId] = React.useState("");
  const [newId, setNewId] = React.useState("");
  const [display, setDisplay] = React.useState(true);

  const handleEditClick = () => {
    setDisplay((prev) => !prev);
  };
  const handleSubmitClick = () => {
    if (id === "") return;
    setNewId(id);
    setDisplay((prev) => !prev);
  };
  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  return (
    <>
      <div className="title-container">
        <h1 className="app-name">
          VALORANT
          <hr />
          Profile Card
        </h1>
      </div>
      <div className="id-container">
        <p className="id-title">ID #TAG</p>
        {display ? (
          <input
            className="id-input"
            placeholder="IDを入力"
            value={id}
            onChange={handleIdChange}
            size="55"
          />
        ) : (
          <p className="new-id" onClick={handleEditClick}>
            {newId}
          </p>
        )}
        {display ? <button onClick={handleSubmitClick}>OK</button> : null}
      </div>
    </>
  );
}

export default IdTag;
