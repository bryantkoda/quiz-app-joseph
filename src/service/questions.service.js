import { makeApiCall } from "./common.service";

export const questionsList = async () => {
    const requestOptions = {
      method: "GET",
    };
    const { response, data } = await makeApiCall(
      process.env.REACT_APP_API_URL,
      requestOptions
    );
    if (response?.ok) {
      return data.results;
    } else {
      console.log(data);
    }
  };
  