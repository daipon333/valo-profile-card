import { getByDisplayValue } from "@testing-library/react";
import React from "react";

function IdTag() {
  const [Id, setId] = React.useState("");
  const [newId, setNewId] = React.useState("");
  const [display, setDisplay] = React.useState(true);

  const handleEditClick = () => {
    setDisplay((prev) => !prev);
  };
  const handleSubmitClick = () => {
    setNewId(Id);
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
            placeholder="IDと#タグを入力"
            value={Id}
            onChange={handleIdChange}
          />
        ) : (
          <p className="new-id" onClick={handleEditClick}>
            {newId}
          </p>
        )}
        {display ? <button onClick={handleSubmitClick}>決定</button> : null}
      </div>
    </>
  );
}

export default IdTag;
