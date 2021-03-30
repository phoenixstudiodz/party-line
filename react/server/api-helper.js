const axios = require("axios");

const BASE_URL = "https://api.daily.co/v1/";
//const API_AUTH = process.env.DAILY_API_KEY;
const API_AUTH = "fc1dbb9531bff76840091064d300330bc4fe388dc7f4bfcd96095cd3287a3096";

// create an axios instance that includes the BASE_URL and your auth token
// this may be useful to put in an external file to it can be referenced
// elsewhere once your application grows
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { Authorization: `Bearer ${API_AUTH}` },
});

exports.apiHelper = async (method, endpoint, body = {}) => {
  console.log(methode,endpoint,body);
  try {
    const response = await api.request({
      url: endpoint,
      method: method,
      data: body,
    });
    return response.data;
  } catch (error) {
    console.log("Status: ", error.response.status);
    console.log("Text: ", error.response.statusText);
    // need to throw again so error is caught
    // a possible improvement here is to pass the status code back so it can be returned to the user
    throw new Error(error);
  }
};
