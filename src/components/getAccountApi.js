import React from "react";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.post["Access-Control-Allow-Methods"] = "*";

// const options = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
//     "Access-Control-Allow-Credentials": "true",
//   },
// };

function getAccountApi(id, tag) {
  const AccountApi = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${id}/${tag}?api_key=RGAPI-2cc040ae-77c5-482e-94de-8ffa6fd81a9c`;
  const accountInfo = async () => {
    try {
      const response = await axios.get(AccountApi);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  accountInfo();
}

export default getAccountApi;
