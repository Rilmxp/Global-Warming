import Factor from "./Factor";
import dataContent from "../../../contentData";

const FactorsContainer = () => {
  return dataContent.map((item, index) => {
    return <Factor key={index} content={item} />;
  });
};

export default FactorsContainer;
