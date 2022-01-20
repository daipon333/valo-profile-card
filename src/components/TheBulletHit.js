import React, { useContext } from "react";
import getAccountApi from "./getAccountApi";
import IdTag from "./IdTag";
import "../styles.css";
import CircularProgress from "@mui/material/CircularProgress";

function TheBulletHit(props) {
  const { headShots, bodyShots, legShots, display } = props;

  return (
    <div className="thebullethit-container">
      <p className="thebullethit-title">The Bullet Hit(%)</p>
      <div className="thebullethit-contains">
        {display ? (
          ""
        ) : (
          <div className="hit-per">
            <p>{`Head = ${headShots}%`}</p>
            <p>{`Body = ${bodyShots}%`}</p>
            <p>{`Leg = ${legShots}%`}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default TheBulletHit;
