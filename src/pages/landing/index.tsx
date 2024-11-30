import Footer from "../../compopnent/footer";
import { useFetchData } from "../../utils/apiService";
import Ax from "./ax";
import Benefits from "./benefits";
import Hero from "./hero";
import List from "./list";
import Services from "./services";
import Slider from "./slider";

const Landing = () => {
  const { data } = useFetchData({
    queryKey: ["plantType"],
    apiUrl: "/getPlantType",
  });

  return (
    <>
      <Hero />
      <Benefits />
      <Ax />
      {data && <Slider {...data[0]} />}
      <List />
      <Services />
      {data && <Slider {...data[1]} />}
      <List />
      {data && <Slider {...data[2]} />}
      <Footer />
    </>
  );
};

export default Landing;
