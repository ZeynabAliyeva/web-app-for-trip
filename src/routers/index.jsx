import PageLayout from "../components/PageLayout";
import DestinationsDetailFeature from "../features/DestinationsDetailFeature";
import AboutUs from "../pages/AbouteUs";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import Destinations from "../pages/Destinations";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import ForgotPassword from "../pages/ForgotPassword";
import CreateAccount from "../pages/CreateAccount";
import Error from "../pages/Error";

function Router() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route
            path="/destinationsDetail"
            element={<DestinationsDetailFeature />}
          />
          <Route path="/faq" element={<Faq />} />
        </Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  );
}

export default Router;
