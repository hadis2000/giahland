import Footer from "../../compopnent/footer";
import Ax from "./ax";
import Benefits from "./benefits";
import Hero from "./hero";
import List from "./list";
import Services from "./services";
import Slider from "./slider";

const Landing = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Ax />
      <Slider title="گیاهان آپارتمانی" id="31" />
      <List />
      <Services />
      {/* <Slider /> */}
      <List />
      {/* <Slider /> */}
      <Footer />
    </>
  );
};

export default Landing;
