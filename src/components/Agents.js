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
import AstraSP from "../images/background-image-sp/BGI.Astra.jpg";
import BreachSP from "../images/background-image-sp/BGI.Breach.jpg";
import ChanberSP from "../images/background-image-sp/BGI.Chanber.png";
import JettSP from "../images/background-image-sp/BGI.Jett.jpg";
import KillJoySP from "../images/background-image-sp/BGI.KillJoy.jpg";
import OmenSP from "../images/background-image-sp/BGI.Omen.jpg";
import PhoenixSP from "../images/background-image-sp/BGI.Phoenix.jpg";
import RazeSP from "../images/background-image-sp/BGI.Raze.jpg";
import ReynaSP from "../images/background-image-sp/BGI.Reyna.jpg";
import SageSP from "../images/background-image-sp/BGI.Sage.jpeg";
import SovaSP from "../images/background-image-sp/BGI.Sova.jpg";
import CypherSP from "../images/background-image-sp/BGI.Sypher.jpg";
import ViperSP from "../images/background-image-sp/BGI.Viper.jpg";
import YoruSP from "../images/background-image-sp/BGI.Yoru.jpg";
import logoSP from "../images/background-image-sp/valorant3.jpeg";
import SkyeSP from "../images/background-image-sp/BGI.Skye.jpg";
import BrimstoneSP from "../images/background-image-sp/Brimstone.jpg";
import KayoSP from "../images/background-image-sp/BGI.Kayo.jpg";

const duelistArr = [
  {
    iconUrl: jet,
    backgroundImage: Jett,
    backgroundImageSp: JettSP,
    charaName: "jett",
  },
  {
    iconUrl: pho,
    backgroundImage: Phoenix,
    backgroundImageSp: PhoenixSP,
    charaName: "phoenix",
  },
  {
    iconUrl: raz,
    backgroundImage: Raze,
    backgroundImageSp: RazeSP,
    charaName: "raze",
  },
  {
    iconUrl: rey,
    backgroundImage: Reyna,
    backgroundImageSp: ReynaSP,
    charaName: "reyna",
  },
  {
    iconUrl: yor,
    backgroundImage: Yoru,
    backgroundImageSp: YoruSP,
    charaName: "yoru",
  },
];
const initiatorArr = [
  {
    iconUrl: sov,
    backgroundImage: Sova,
    backgroundImageSp: SovaSP,
    charaName: "sova",
  },
  {
    iconUrl: bre,
    backgroundImage: Breach,
    backgroundImageSp: BreachSP,
    charaName: "breach",
  },
  {
    iconUrl: sky,
    backgroundImage: Skye,
    backgroundImageSp: SkyeSP,
    charaName: "skye",
  },
  {
    iconUrl: kay,
    backgroundImage: Kayo,
    backgroundImageSp: KayoSP,
    charaName: "kayo",
  },
];
const controllerArr = [
  {
    iconUrl: ome,
    backgroundImage: Omen,
    backgroundImageSp: OmenSP,
    charaName: "omen",
  },
  {
    iconUrl: bri,
    backgroundImage: Brimstone,
    backgroundImageSp: BrimstoneSP,
    charaName: "brimstone",
  },
  {
    iconUrl: vip,
    backgroundImage: Viper,
    backgroundImageSp: ViperSP,
    charaName: "viper",
  },
  {
    iconUrl: ast,
    backgroundImage: Astra,
    backgroundImageSp: AstraSP,
    charaName: "astra",
  },
];
const sentinelArr = [
  {
    iconUrl: sag,
    backgroundImage: Sage,
    backgroundImageSp: SageSP,
    charaName: "sage",
  },
  {
    iconUrl: cyp,
    backgroundImage: Cypher,
    backgroundImageSp: CypherSP,
    charaName: "cypher",
  },
  {
    iconUrl: kj,
    backgroundImage: KillJoy,
    backgroundImageSp: KillJoySP,
    charaName: "killjoy",
  },
  {
    iconUrl: cha,
    backgroundImage: Chanber,
    backgroundImageSp: ChanberSP,
    charaName: "chanber",
  },
];

function Agents(props) {
  const { imageChange, setImageChange } = props;

  const [bgiArr, setBgiArr] = React.useState([]);
  const [bgiSpArr, setBgiSparr] = React.useState;
  return (
    <>
      <div className="agent-container">
        <p className="agent-title title">-Agents-</p>
        <div className="agent-icon-container">
          <div className="agent-icon-container-inner">
            <p className="type-name">
              ≥ Duelist ≤
              <hr />
            </p>
            <div className="duelist icon">
              {duelistArr.map((agent, index) => (
                <Images
                  img={agent.iconUrl}
                  index={index}
                  imageChange={imageChange}
                  setImageChange={setImageChange}
                  backgroundImage={agent.backgroundImage}
                  bgiArr={bgiArr}
                  setBgiArr={setBgiArr}
                  backgroundImageSp={agent.backgroundImageSp}
                />
              ))}
            </div>
          </div>
          <div className="agent-icon-container-inner">
            <p className="type-name">
              ≥ Initiator ≤
              <hr />
            </p>
            <div className="initiator icon">
              {initiatorArr.map((agent, index) => (
                <Images
                  img={agent.iconUrl}
                  index={index}
                  imageChange={imageChange}
                  setImageChange={setImageChange}
                  backgroundImage={agent.backgroundImage}
                  setNumberArr={setNumberArr}
                  numberArr={numberArr}
                  backgroundImageSp={backgroundImageSp}
                />
              ))}
            </div>
          </div>

          <div className="agent-icon-container-inner">
            <p className="type-name">
              ≥ Controller ≤
              <hr />
            </p>
            <div className="controller icon">
              {controllerArr.map((agent, index) => (
                <Images
                  img={agent.iconUrl}
                  index={index}
                  imageChange={imageChange}
                  setImageChange={setImageChange}
                  backgroundImage={agent.backgroundImage}
                  setNumberArr={setNumberArr}
                  numberArr={numberArr}
                  backgroundImageSp={backgroundImageSp}
                />
              ))}
            </div>
          </div>

          <div className="agent-icon-container-inner">
            <p className="type-name">
              ≥ Sentinel ≤
              <hr />
            </p>
            <div className="sentinel icon">
              {sentinelArr.map((agent, index) => (
                <Images
                  img={agent.iconUrl}
                  index={index}
                  imageChange={imageChange}
                  setImageChange={setImageChange}
                  backgroundImage={agent.backgroundImage}
                  setNumberArr={setNumberArr}
                  numberArr={numberArr}
                  backgroundImageSp={backgroundImageSp}
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
