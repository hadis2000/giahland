import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import MainLayout from "./pages/main-layout";
import NotFound from "./pages/not-found";
import ShoppingCard from "./pages/shopping-card";
import Login from "./pages/login";
import Register from "./pages/register";
import Panel from "./pages/panel";
import UserInfo from "./pages/panel/user-info";
import ChangePass from "./pages/panel/change-pass";
import DoctorPlants from "./pages/panel/doctor-plants";
import Message from "./pages/panel/message";
import PlantsDetails from "./pages/plants-detail";
import Test from "./test";

// store
import { store } from "./store";
import { Provider } from "react-redux";
import PrivateRoute from "./compopnent/private-route";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
          <Route path="shopping-card" element={<ShoppingCard />} />

          {/* استفاده از PrivateRoute برای محافظت از مسیرهای panel */}
          <Route
            path="/panel/*"
            element={<PrivateRoute element={<Panel />} restricted={true} />}
          >
            <Route path="" element={<UserInfo />} />
            <Route path="change-pass" element={<ChangePass />} />
            <Route path="doctor" element={<DoctorPlants />} />
            <Route path="message" element={<Message />} />
          </Route>

          <Route path="plant-detail/:id" element={<PlantsDetails />} />
          <Route path="/test" element={<Test />} />
        </Route>
        <Route
          path="/login"
          element={<PrivateRoute element={<Login />} restricted={false} />}
        />
        <Route
          path="/register"
          element={<PrivateRoute element={<Register />} restricted={false} />}
        />
      </Routes>
    </Provider>
  );
}

export default App;
