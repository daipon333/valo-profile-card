import "../styles.css";
import React from "react";
import Images from "./Images";
import ast from "..//images/chara_icon/Astra_icon.png";
import bre from "..//images/chara_icon/Breach_icon.png";
import bri from "../images/chara_icon/Brimstone_icon.png";
import cha from "../images/chara_icon/Chamber_icon-150x150.png";
import cyp from "../images/chara_icon/Cypher_icon.png";
import jet from "../images/chara_icon/Jett_icon-1.png";
import kay from "../images/chara_icon/KAYO_icon.png";
import kj from "../images/chara_icon/Killjoy_icon.png";
import ome from "../images/chara_icon/Omen_icon.png";
import pho from "../images/chara_icon/Phoenix_icon.png";
import raz from "../images/chara_icon/Raze_icon.png";
import rey from "../images/chara_icon/Reyna_icon.png";
import sag from "../images/chara_icon/Sage_icon.png";
import sky from "../images/chara_icon/Skye_icon.png";
import sov from "../images/chara_icon/Sova_icon.png";
import vip from "../images/chara_icon/Viper_icon.png";
import yor from "../images/chara_icon/Yoru_icon.png";
import Astra from "../images/background-image/BGI.Astra.jpg";
import Breach from "../images/background-image/BGI.Breach.jpg";
import Chanber from "../images/background-image/BGI.Chanber.png";
import Jett from "../images/background-image/BGI.Jett.jpg";
import KillJoy from "../images/background-image/BGI.KillJoy.jpg";
import Omen from "../images/background-image/BGI.Omen.jpg";
import Phoenix from "../images/background-image/BGI.Phoenix.jpg";
import Raze from "../images/background-image/BGI.Raze.jpg";
import Reyna from "../images/background-image/BGI.Reyna.jpg";
import Sage from "../images/background-image/BGI.Sage.jpeg";
import Sova from "../images/background-image/BGI.Sova.jpg";
import Cypher from "../images/background-image/BGI.Sypher.jpg";
import Viper from "../images/background-image/BGI.Viper.jpg";
import Yoru from "../images/background-image/BGI.Yoru.jpg";
import logo from "../images/background-image/valorant3.jpeg";
import Skye from "../images/background-image/BGI.Skye.jpg";
import Brimstone from "../images/background-image/Brimstone.jpg";
import Kayo from "../images/background-image/BGI.Kayo.jpg";

const duelistArr = [
  { iconUrl: jet, backgroundImage: Jett, charaName: "jett" },
  { iconUrl: pho, backgroundImage: Phoenix, charaName: "phoenix" },
  { iconUrl: raz, backgroundImage: Raze, charaName: "raze" },
  { iconUrl: rey, backgroundImage: Reyna, charaName: "reyna" },
  { iconUrl: yor, backgroundImage: Yoru, charaName: "yoru" },
];
const initiatorArr = [
  { iconUrl: sov, backgroundImage: Sova, charaName: "sova" },
  { iconUrl: bre, backgroundImage: Breach, charaName: "breach" },
  { iconUrl: sky, backgroundImage: Skye, charaName: "skye" },
  { iconUrl: kay, backgroundImage: Kayo, charaName: "kayo" },
];
const controllerArr = [
  { iconUrl: ome, backgroundImage: Omen, charaName: "omen" },
  { iconUrl: bri, backgroundImage: Brimstone, charaName: "brimstone" },
  { iconUrl: vip, backgroundImage: Viper, charaName: "viper" },
  { iconUrl: ast, backgroundImage: Astra, charaName: "astra" },
];
const sentinelArr = [
  { iconUrl: sag, backgroundImage: Sage, charaName: "sage" },
  { iconUrl: cyp, backgroundImage: Cypher, charaName: "cypher" },
  { iconUrl: kj, backgroundImage: KillJoy, charaName: "killjoy" },
  { iconUrl: cha, backgroundImage: Chanber, charaName: "chanber" },
];

function Agents(props) {
  const { imageChange, setImageChange } = props;

  const [numberArr, setNumberArr] = React.useState([]);
  return (
    <>
      <div>
        <div className="agent-container">
          <p className="agent-title">Agents</p>
          <div className="agent-icon-container">
            <div className="duelist icon">
              <p className="type-name">Duelist</p>
              {duelistArr.map((agent, index) => (
                <Images
                  img={agent.iconUrl}
                  index={index}
                  imageChange={imageChange}
                  setImageChange={setImageChange}
                  backgroundImage={agent.backgroundImage}
                  setNumberArr={setNumberArr}
                  numberArr={numberArr}
                />
              ))}
            </div>

            <div className="initiator icon">
              <p className="type-name">Initiator</p>
              {initiatorArr.map((agent, index) => (
                <Images
                  img={agent.iconUrl}
                  index={index}
                  imageChange={imageChange}
                  setImageChange={setImageChange}
                  backgroundImage={agent.backgroundImage}
                  setNumberArr={setNumberArr}
                  numberArr={numberArr}
                />
              ))}
            </div>

            <div className="controller icon">
              <p className="type-name">Controller</p>
              {controllerArr.map((agent, index) => (
                <Images
                  img={agent.iconUrl}
                  index={index}
                  imageChange={imageChange}
                  setImageChange={setImageChange}
                  backgroundImage={agent.backgroundImage}
                  setNumberArr={setNumberArr}
                  numberArr={numberArr}
                />
              ))}
            </div>

            <div className="sentinel icon">
              <p className="type-name">Sentinel</p>
              {sentinelArr.map((agent, index) => (
                <Images
                  img={agent.iconUrl}
                  index={index}
                  imageChange={imageChange}
                  setImageChange={setImageChange}
                  backgroundImage={agent.backgroundImage}
                  setNumberArr={setNumberArr}
                  numberArr={numberArr}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Agents;
