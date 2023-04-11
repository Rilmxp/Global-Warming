import Factor from "./Factor";
import dataContent from "../../../contentData";

const FactorsContainer = () => {
  return (
    <section>
      {dataContent.map((item, index) => {
        return <Factor key={index} content={item} />;
      })}
    </section>
  );
};

export default FactorsContainer;
