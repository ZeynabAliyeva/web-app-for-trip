import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./style.css"
function PageLayout() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default PageLayout;
