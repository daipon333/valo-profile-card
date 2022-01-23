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

import broGray from "../images/rank_icon_gray/bronze_icon3.png";
import diaGray from "../images/rank_icon_gray/dia_icon.png";
import goldGray from "../images/rank_icon_gray/gold_icon.png";
import imoGray from "../images/rank_icon_gray/imortal_icon.png";
import ironGray from "../images/rank_icon_gray/iron_icon.png";
import pratGray from "../images/rank_icon_gray/prati_icon.png";
import radiGray from "../images/rank_icon_gray/radi_icon.png";
import silGray from "../images/rank_icon_gray/silver_icon.png";
import unGray from "../images/rank_icon_gray/unranked_icon2.png";
import { getBottomNavigationActionUtilityClass } from "@mui/material";

const rankIconArr = [
  { rankIcon: un, rankIconGray: unGray },
  { rankIcon: iron, rankIconGray: ironGray },
  { rankIcon: bro, rankIconGray: broGray },
  { rankIcon: sil, rankIconGray: silGray },
  { rankIcon: gold, rankIconGray: goldGray },
  { rankIcon: prat, rankIconGray: pratGray },
  { rankIcon: dia, rankIconGray: imoGray },
  { rankIcon: imo, rankIconGray: imoGray },
  { rankIcon: radi, rankIconGray: radiGray },
];

function Rank() {
  return (
    <>
      <div className="rank-container">
        <p className="rank-title title">-RANK-</p>
        <div className="rank-icons-container">
          <div className="rank-icons">
            {rankIconArr.map((icon, index) => (
              <Images
                img={icon.rankIcon}
                imgGray={icon.rankIconGray}
                index={index}
                key={icon.rankIcon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Rank;
