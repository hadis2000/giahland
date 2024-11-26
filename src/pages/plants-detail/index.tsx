import { useEffect } from "react";
import Footer from "../../compopnent/footer";
import Slider from "../landing/slider";
import Comments from "./comments";
import Info from "./info";

const PlantsDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Info />
      <Slider />
      <Comments />
      <Footer />
    </>
  );
};

export default PlantsDetails;
