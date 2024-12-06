import { useEffect } from "react";
import Footer from "../../compopnent/footer";
import Slider from "../landing/slider";
import Comments from "./comments";
import Info from "./info";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchData } from "../../utils/apiService";

const PlantsDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { data, isLoading } = useFetchData({
    queryKey: ["plantsDetail", id],
    apiUrl: "/getPlantById",
    parameter: { plantId: id },
  });

  const nav = useNavigate();

  useEffect(() => {
    if (!isLoading && data == null) nav("/");
  }, [data, isLoading]);

  if (!data || isLoading) return <>loading...</>;

  return (
    <>
      <Info {...data} />
      <Slider plantTypeId={data.type} />
      <Comments />
      <Footer />
    </>
  );
};

export default PlantsDetails;
