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

import astGray from "../images/chara_icon_gray/Astra_icon.png";
import breGray from "../images/chara_icon_gray/Breach_icon.png";
import briGray from "../images/chara_icon_gray/Brimstone_icon.png";
import chaGray from "../images/chara_icon_gray/Chamber_icon-150x150 (1).png";
import cypGray from "../images/chara_icon_gray/Cypher_icon (1).png";
import jetGray from "../images/chara_icon_gray/Jett_icon-1 (1).png";
import kayGray from "../images/chara_icon_gray/KAYO_icon.png";
import kjGray from "../images/chara_icon_gray/Killjoy_icon.png";
import omeGray from "../images/chara_icon_gray/Omen_icon (1).png";
import phoGray from "../images/chara_icon_gray/Phoenix_icon.png";
import razGray from "../images/chara_icon_gray/Raze_icon.png";
import reyGray from "../images/chara_icon_gray/Reyna_icon.png";
import sagGray from "../images/chara_icon_gray/Sage_icon.png";
import skyGray from "../images/chara_icon_gray/Skye_icon.png";
import sovGray from "../images/chara_icon_gray/Sova_icon (1).png";
import vipGray from "../images/chara_icon_gray/Viper_icon.png";
import yorGray from "../images/chara_icon_gray/Yoru_icon.png";

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
import SkyeSP from "../images/background-image-sp/BGI.Skye.jpg";
import BrimstoneSP from "../images/background-image-sp/Brimstone.jpg";
import KayoSP from "../images/background-image-sp/BGI.Kayo.jpg";

const duelistArr = [
  {
    iconUrl: jet,
    iconUrlGray: jetGray,
    backgroundImage: Jett,
    backgroundImageSp: JettSP,
    charaName: "jett",
  },
  {
    iconUrl: pho,
    iconUrlGray: phoGray,
    backgroundImage: Phoenix,
    backgroundImageSp: PhoenixSP,
    charaName: "phoenix",
  },
  {
    iconUrl: raz,
    iconUrlGray: razGray,
    backgroundImage: Raze,
    backgroundImageSp: RazeSP,
    charaName: "raze",
  },
  {
    iconUrl: rey,
    iconUrlGray: reyGray,
    backgroundImage: Reyna,
    backgroundImageSp: ReynaSP,
    charaName: "reyna",
  },
  {
    iconUrl: yor,
    iconUrlGray: yorGray,
    backgroundImage: Yoru,
    backgroundImageSp: YoruSP,
    charaName: "yoru",
  },
];
const initiatorArr = [
  {
    iconUrl: sov,
    iconUrlGray: sovGray,
    backgroundImage: Sova,
    backgroundImageSp: SovaSP,
    charaName: "sova",
  },
  {
    iconUrl: bre,
    iconUrlGray: breGray,
    backgroundImage: Breach,
    backgroundImageSp: BreachSP,
    charaName: "breach",
  },
  {
    iconUrl: sky,
    iconUrlGray: skyGray,
    backgroundImage: Skye,
    backgroundImageSp: SkyeSP,
    charaName: "skye",
  },
  {
    iconUrl: kay,
    iconUrlGray: kayGray,
    backgroundImage: Kayo,
    backgroundImageSp: KayoSP,
    charaName: "kayo",
  },
];
const controllerArr = [
  {
    iconUrl: ome,
    iconUrlGray: omeGray,
    backgroundImage: Omen,
    backgroundImageSp: OmenSP,
    charaName: "omen",
  },
  {
    iconUrl: bri,
    iconUrlGray: briGray,
    backgroundImage: Brimstone,
    backgroundImageSp: BrimstoneSP,
    charaName: "brimstone",
  },
  {
    iconUrl: vip,
    iconUrlGray: vipGray,
    backgroundImage: Viper,
    backgroundImageSp: ViperSP,
    charaName: "viper",
  },
  {
    iconUrl: ast,
    iconUrlGray: astGray,
    backgroundImage: Astra,
    backgroundImageSp: AstraSP,
    charaName: "astra",
  },
];
const sentinelArr = [
  {
    iconUrl: sag,
    iconUrlGray: sagGray,
    backgroundImage: Sage,
    backgroundImageSp: SageSP,
    charaName: "sage",
  },
  {
    iconUrl: cyp,
    iconUrlGray: cypGray,
    backgroundImage: Cypher,
    backgroundImageSp: CypherSP,
    charaName: "cypher",
  },
  {
    iconUrl: kj,
    iconUrlGray: kjGray,
    backgroundImage: KillJoy,
    backgroundImageSp: KillJoySP,
    charaName: "killjoy",
  },
  {
    iconUrl: cha,
    iconUrlGray: chaGray,
    backgroundImage: Chanber,
    backgroundImageSp: ChanberSP,
    charaName: "chanber",
  },
];

function Agents(props) {
  const {
    imageChange,
    setImageChange,
    imageChangeSp,
    setImageChangeSp,
    deleteButton,
    setDeleteButton,
    saveStandby,
    setSaveStanby,
  } = props;

  const [bgiArr, setBgiArr] = React.useState([]);
  const [bgiSpArr, setBgiSpArr] = React.useState([]);
  return (
    <>
      <div className="agent-container">
        <p className="agent-title title">-Agents-</p>
        <div className="agent-icon-container">
          <div className="agent-icon-container-inner">
            <p className="type-name">
              ??? Duelist ???
              <hr />
            </p>
            <div className="duelist icon">
              {duelistArr.map((agent, index) => (
                <Images
                  img={agent.iconUrl}
                  imgGray={agent.iconUrlGray}
                  index={index}
                  imageChange={imageChange}
                  setImageChange={setImageChange}
                  imageChangeSp={imageChangeSp}
                  setImageChangeSp={setImageChangeSp}
                  backgroundImage={agent.backgroundImage}
                  bgiArr={bgiArr}
                  setBgiArr={setBgiArr}
                  bgiSpArr={bgiSpArr}
                  setBgiSpArr={setBgiSpArr}
                  backgroundImageSp={agent.backgroundImageSp}
                  key={agent.iconUrl}
                  setDeleteButton={setDeleteButton}
                  deleteButton={deleteButton}
                  saveStandby={saveStandby}
                  setSaveStanby={setSaveStanby}
                />
              ))}
            </div>
          </div>
          <div className="agent-icon-container-inner">
            <p className="type-name">
              ??? Initiator ???
              <hr />
            </p>
            <div className="initiator icon">
              {initiatorArr.map((agent, index) => (
                <Images
                  img={agent.iconUrl}
                  imgGray={agent.iconUrlGray}
                  index={index}
                  imageChange={imageChange}
                  setImageChange={setImageChange}
                  imageChangeSp={imageChangeSp}
                  setImageChangeSp={setImageChangeSp}
                  backgroundImage={agent.backgroundImage}
                  bgiArr={bgiArr}
                  setBgiArr={setBgiArr}
                  bgiSpArr={bgiSpArr}
                  setBgiSpArr={setBgiSpArr}
                  backgroundImageSp={agent.backgroundImageSp}
                  key={agent.iconUrl}
                  setDeleteButton={setDeleteButton}
                  deleteButton={deleteButton}
                  saveStandby={saveStandby}
                  setSaveStanby={setSaveStanby}
                />
              ))}
            </div>
          </div>

          <div className="agent-icon-container-inner">
            <p className="type-name">
              ??? Controller ???
              <hr />
            </p>
            <div className="controller icon">
              {controllerArr.map((agent, index) => (
                <Images
                  img={agent.iconUrl}
                  imgGray={agent.iconUrlGray}
                  index={index}
                  imageChange={imageChange}
                  setImageChange={setImageChange}
                  imageChangeSp={imageChangeSp}
                  setImageChangeSp={setImageChangeSp}
                  backgroundImage={agent.backgroundImage}
                  bgiArr={bgiArr}
                  setBgiArr={setBgiArr}
                  bgiSpArr={bgiSpArr}
                  setBgiSpArr={setBgiSpArr}
                  backgroundImageSp={agent.backgroundImageSp}
                  key={agent.iconUrl}
                  setDeleteButton={setDeleteButton}
                  deleteButton={deleteButton}
                  saveStandby={saveStandby}
                  setSaveStanby={setSaveStanby}
                />
              ))}
            </div>
          </div>

          <div className="agent-icon-container-inner">
            <p className="type-name">
              ??? Sentinel ???
              <hr />
            </p>
            <div className="sentinel icon">
              {sentinelArr.map((agent, index) => (
                <Images
                  img={agent.iconUrl}
                  imgGray={agent.iconUrlGray}
                  index={index}
                  imageChange={imageChange}
                  setImageChange={setImageChange}
                  imageChangeSp={imageChangeSp}
                  setImageChangeSp={setImageChangeSp}
                  backgroundImage={agent.backgroundImage}
                  bgiArr={bgiArr}
                  setBgiArr={setBgiArr}
                  bgiSpArr={bgiSpArr}
                  setBgiSpArr={setBgiSpArr}
                  backgroundImageSp={agent.backgroundImageSp}
                  key={agent.iconUrl}
                  setDeleteButton={setDeleteButton}
                  deleteButton={deleteButton}
                  saveStandby={saveStandby}
                  setSaveStanby={setSaveStanby}
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
