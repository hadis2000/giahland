import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import MainLayout from "./pages/main-layout";
import NotFound from "./pages/not-found";
import ShoppingCard from "./pages/shopping-card";
import Login from "./pages/login";
import Register from "./pages/register";
import Panel from "./pages/panel";
import UserInfo from "./pages/panel/user-info";
import DoctorPlants from "./pages/panel/doctor-plants";
import Message from "./pages/panel/message";
import PlantsDetails from "./pages/plants-detail";
import Test from "./test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
          <Route path="shopping-card" element={<ShoppingCard />} />
          <Route path="/panel" element={<Panel />}>
            <Route path="" element={<UserInfo />} />
            <Route path="doctor" element={<DoctorPlants />} />
            <Route path="message" element={<Message />} />
          </Route>
          <Route path="plant-detail/:id" element={<PlantsDetails />} />
          <Route path="/test" element={<Test />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
