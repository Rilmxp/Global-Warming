import axios from "axios";

const graphDataApi = axios.create({
  baseURL: "https://global-warming.org/api",
});

// Params: factor is "temperature" || "co2" || "methane" || "nitrous-oxide" || "artic"
const getGraphData = async (factor) => {
  const response = await graphDataApi.get(factor + "-api");
  return response.data;
};

export { getGraphData };
