import React from "react";
import "./styles.css";

function getAccountApi() {
  const AccountApi = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/SuperPotato/12231?api_key=RGAPI-2cc040ae-77c5-482e-94de-8ffa6fd81a9c
  `;
  const AccountInfo = async () => {
    try {
      const response = await axios.get(AccountApi);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    AccountInfo();
  }, []);
}

export default getAccountApi;
