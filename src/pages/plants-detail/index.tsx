import { useEffect } from "react";
import Footer from "../../compopnent/footer";
import Slider from "../landing/slider";
import Comments from "./comments";
import Info from "./info";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchData } from "../../utils/apiService";

const PlantsDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const { data } = useFetchData({
    queryKey: ["plants"],
    apiUrl: "/getPlantById",
    parameter: { plantId: id },
  });

  const nav = useNavigate();
  useEffect(() => {
    if (data == null) {
      nav("/");
    }
  }, [data]);

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
