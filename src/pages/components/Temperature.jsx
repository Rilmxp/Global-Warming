import { MainTransitionAnimationWrapper } from "../../features/configuration";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getGraphData } from "../../api/graphDataApi";
import { useState } from "react";

const Temperature = () => {
  // const [temperatureData, setTemperatureData] = useState({});

  const queryClient = useQueryClient(); // the client provided to QueryProvider in index.jsx
  const {
    isLoading,
    isError,
    error, // if theres an error it will return the error
    data: graphData,
  } = useQuery({
    queryKey: ["temperaturegraphData"], //"graphDataCache" is the name where cache will be stored
    queryFn: () => getGraphData("temperature-api"),
  });

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = JSON.stringify(graphData);
    console.log("query", graphData);
  }

  return (
    <MainTransitionAnimationWrapper>
      <h1>Temperature</h1>
      <div>{content}</div>
    </MainTransitionAnimationWrapper>
  );
};

export default Temperature;
