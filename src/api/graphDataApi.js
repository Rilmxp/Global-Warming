import axios from "axios";

const graphDataApi = axios.create({
  baseURL: "https://global-warming.org/api",
});

// Params: factor is temperature, carbonDioxie, methane etc.
const getGraphData = async (factor) => {
  const response = await graphDataApi.get(factor + "-api");
  return response.data.result;
};

export { getGraphData };
