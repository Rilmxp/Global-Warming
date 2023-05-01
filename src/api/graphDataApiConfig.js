import axios from "axios";

/*
APIs used for calls:

Temperature - https://global-warming.org/api/temperature-api
Carbon dioxide - https://global-warming.org/api/co2-api
Methane - https://global-warming.org/api/methane-api
Nitrous oxide - https://global-warming.org/api/nitrous-oxide-api
Polar ice - https://global-warming.org/api/arctic-api
*/

//axios base config for async calls.
const graphDataApi = axios.create({
  baseURL: "https://global-warming.org/api",
});

// Params: factor = "temperature" || "co2" || "methane" || "nitrous-oxide" || "arctic"
const getGraphData = async (factor) => {
  const response = await graphDataApi.get(factor + "-api");
  return response.data;
};

export { getGraphData };
