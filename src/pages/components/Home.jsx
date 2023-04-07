import { NavigationBar, Footer } from "../../features/layout";
import { Banner } from "../../features/ui";
import { Factor } from "../../features/containers";
import FactorsContainer from "../../features/containers/components/FactorsContainer";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <Banner />
        <FactorsContainer />
        {/* <Factor title="Temperature">
          <p>Temperature text</p>
        </Factor>
        <Factor title="Carbon Dioxide">
          <p>Carbon Dioxide text</p>
        </Factor> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
