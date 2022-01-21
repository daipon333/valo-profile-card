import React from "react";
import "../styles.css";
import Images from "./Images";
import dia from "../images/rank_icon/dia_icon.png";
import gold from "../images/rank_icon/gold_icon.png";
import iron from "../images/rank_icon/iron_icon.png";
import prat from "../images/rank_icon/prati_icon.png";
import radi from "../images/rank_icon/radi_icon.png";
import sil from "../images/rank_icon/silver_icon.png";
import bro from "../images/rank_icon/bronze_icon.png";
import imo from "../images/rank_icon/imortal_icon.png";
import un from "../images/rank_icon/unranked_icon.png";

const rankIconArr = [un, iron, bro, sil, gold, prat, dia, imo, radi];

function Rank() {
  return (
    <>
      <div className="rank-container">
        <p className="rank-title title">-RANK-</p>
        <div className="rank-icons-container">
          <div className="rank-icons">
            {rankIconArr.map((rankIcon, index) => (
              <Images img={rankIcon} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Rank;
