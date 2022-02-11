import axios from "axios";

async function getAccountApi(id, tag) {
  const AccountApi = `https://api.henrikdev.xyz/valorant/v3/matches/ap/${id}/${tag}`;
  let response;
  try {
    response = await axios.get(AccountApi);
  } catch (error) {
    console.log(error);
  }
  return response;
}

export default getAccountApi;
