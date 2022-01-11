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
