import axios from "axios";

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
