import React from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";

export function TwitterButton(props) {
  const { setTwitterSwitch } = props;

  function closeButton() {
    setTwitterSwitch(false);
  }

  return (
    <div className="share-page-container">
      <div className="share-page-title-container">
        <p className="share-page-title">保存したカードをシェアしませんか？</p>
      </div>
      <div className="share-btn-container">
        <div className="share-btn-close-container">
          <p className="share-btn-close-text">閉じる</p>
        </div>
        <div className="share-btn-twitter">
          <TwitterShareButton
            className="share-btn"
            url={["https://daipon333.github.io/valo-profile-card/"]}
            title={["保存した画像をシェアしよう！！"]}
            hashtags={[
              "VALORANT",
              "VALORANT募集",
              "VALORANTフレンド募集",
              "VALORANTプロフィールカード",
            ]}
          >
            <TwitterIcon className="twitter-icon" size={60} round />
            <p className="share-btn-text">Twitterで共有!!</p>
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
}
