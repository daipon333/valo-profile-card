import React, { useContext } from "react";
import getAccountApi from "./getAccountApi";
import IdTag from "./IdTag";
import "../styles.css";
import { CircularProgress, LinearProgress } from "@mui/material/";
import { padding } from "@mui/system";

function TheBulletHit(props) {
  const { headShots, bodyShots, legShots, display, progress } = props;

  return (
    <div className="thebullethit-container">
      <p className="thebullethit-title title">-The Bullet Hit(%)-</p>
      <div className="thebullethit-contains">
        {display ? (
          <div className="hit-per-contains">
            <p className="hit-per">Head = %</p>
            <p className="hit-per">Body = %</p>
            <p className="hit-per">Leg = %</p>
          </div>
        ) : (
          <div>
            {progress ? (
              <div className="lineProgress">
                <LinearProgress
                  size={10}
                  color="error"
                  style={{
                    width: "35vw",
                    height: "1vh",
                  }}
                />
              </div>
            ) : (
              <div className="hit-per">
                <p className="hit-per">{`Head = ${headShots}%`}</p>
                <p className="hit-per">{`Body = ${bodyShots}%`}</p>
                <p className="hit-per">{`Leg = ${legShots}%`}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default TheBulletHit;
