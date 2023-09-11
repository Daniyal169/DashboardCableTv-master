import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Pages from "./components/Pages";
import Zipcodes from "./components/Zipcodes";
import User from "./components/User";
import UpdateProvider from "./components/UpdateProvider";
// import MainSectionEditor from "./components/MainSectionEditor";
import MainSectionEditor from "./pages/Home/MainSectionEditor";
import EditHeroSection from "./pages/Home/EditHeroSection";
import EditBlogSection from "./pages/Home/EditBlogSection";
import EditServiceSection from "./pages/Home/EditServiceSection";
import EditAboutShopSatelliteTVSection from "./pages/Home/EditAboutShopSatelliteTVSection";
import EditCheckServicesProvidersSection from "./pages/Home/EditCheckServicesProvidersSection";
import EditFooterSection from "./pages/Home/EditFooterSection";
import EditHeroCommon from "./pages/ServiceProviders/EditHeroCommon";
import EditHeroCommonAbout from "./pages/AboutUs/EditHeroCommonAbout";
import HeroCommonContactUs from "./pages/ContactUs/HeroCommonContactUs";
import EditHeroCommonServices from "./pages/Services/EditHeroCommonServices";
import EditHeroCommonPrivacyPolicy from "./pages/PrivacyPolicy/EditHeroCommonPP";
import EditContentPrivacyPolicy from "./pages/PrivacyPolicy/EditContent-PrivacyPolicy";
import EditHeroCommonCableTV from "./pages/CableTV/EditHeroCommonCableTV";
import EditContentCableTV from "./pages/CableTV/EditContentCableTv";
import EditHeroCommonCableInterent from "./pages/CableInternet/EditHeroCommonCableInternet";
import EditContentCableInternet from "./pages/CableInternet/EditContentCableInternet";
import EditHeroCommonSatelliteTV from "./pages/SatelliteTV/EditHeroCommonSatelliteTV";
import EditContentSatelliteTV from "./pages/SatelliteTV/EditContentSatelliteTv";
import EditHeroCommonSatelliteInternet from "./pages/SatelliteInternet/EditHeroCommonSatelliteInternet";
import EditContentSatelliteInternet from "./pages/SatelliteInternet/EditContentSatelliteInternet";
import AllPages from "./pages/AllPages";
import SliderCableTv from "./pages/Home/SliderCableTv";
import SliderCableInternet from "./pages/Home/SliderCableInternet";
import SliderSatelliteTv from "./pages/Home/SliderSatelliteTv";
import SliderSatelliteInternet from "./pages/Home/SliderSatelliteInternet";
import BlogCard1 from "./pages/Home/BlogCard1";
import BlogCard2 from "./pages/Home/BlogCard2";
import BlogCard3 from "./pages/Home/BlogCard3";
import EditContact_Content_Section from "./pages/ContactUs/EditContact_Content_Section";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/pages" exact Component={Pages}></Route>
        <Route
          path="/pages/main_section"
          exact
          Component={MainSectionEditor}
        ></Route>
        <Route
          path="/pages/hero_section"
          exact
          Component={EditHeroSection}
        ></Route>
        <Route
          path="/pages/blog_section"
          exact
          Component={EditBlogSection}
        ></Route>
        <Route
          path="/pages/checkserviceprovider_section"
          exact
          Component={EditCheckServicesProvidersSection}
        ></Route>
        <Route
          path="/pages/service_section"
          exact
          Component={EditServiceSection}
        ></Route>
        <Route
          path="/pages/footer_section"
          exact
          Component={EditFooterSection}
        ></Route>
        <Route
          path="/pages/slider_cabletv"
          exact
          Component={SliderCableTv}
        ></Route>
        <Route
          path="/pages/slider_cableinternet"
          exact
          Component={SliderCableInternet}
        ></Route>
        <Route
          path="/pages/slider_satellitetv"
          exact
          Component={SliderSatelliteTv}
        ></Route>
        <Route
          path="/pages/slider_satelliteinternet"
          exact
          Component={SliderSatelliteInternet}
        ></Route>
        <Route path="/pages/blog_card1" exact Component={BlogCard1} />
        <Route path="/pages/blog_card2" exact Component={BlogCard2} />
        <Route path="/pages/blog_card3" exact Component={BlogCard3} />
        <Route
          path="/pages/aboutshopsatellite_section"
          exact
          Component={EditAboutShopSatelliteTVSection}
        ></Route>
        <Route
          path="/pages/serviceproivder/hero_common"
          exact
          Component={EditHeroCommon}
        ></Route>
        <Route
          path="/pages/contactus/hero_common"
          exact
          Component={HeroCommonContactUs}
        ></Route>
        <Route
          path="/pages/contactus/contact_content"
          exact
          Component={EditContact_Content_Section}
        ></Route>
        <Route
          path="/pages/aboutus/hero_common"
          exact
          Component={EditHeroCommonAbout}
        ></Route>
        <Route
          path="/pages/services/hero_common"
          exact
          Component={EditHeroCommonServices}
        ></Route>
        <Route
          path="/pages/privacy_policy/hero_common"
          exact
          Component={EditHeroCommonPrivacyPolicy}
        ></Route>
        <Route
          path="/pages/privacy_policy/content"
          exact
          Component={EditContentPrivacyPolicy}
        ></Route>
        <Route
          path="/pages/cabletv/hero_common"
          exact
          Component={EditHeroCommonCableTV}
        ></Route>
        <Route
          path="/pages/cabletv/content"
          exact
          Component={EditContentCableTV}
        ></Route>{" "}
        <Route
          path="/pages/cableinternet/hero_common"
          exact
          Component={EditHeroCommonCableInterent}
        ></Route>
        <Route
          path="/pages/cableinternet/content"
          exact
          Component={EditContentCableInternet}
        ></Route>
        <Route
          path="/pages/satellite_tv/hero_common"
          exact
          Component={EditHeroCommonSatelliteTV}
        ></Route>
        <Route
          path="/pages/satellite_tv/content"
          exact
          Component={EditContentSatelliteTV}
        ></Route>{" "}
        <Route
          path="/pages/satellite_internet/hero_common"
          exact
          Component={EditHeroCommonSatelliteInternet}
        ></Route>
        <Route
          path="/pages/satellite_internet/content"
          exact
          Component={EditContentSatelliteInternet}
        ></Route>
        <Route path="/update_privoder" exact Component={UpdateProvider}></Route>
        <Route path="/zipcode" exact Component={Zipcodes}></Route>
        <Route path="/user" exact Component={User}></Route>
        <Route
          path="/login"
          exact
          element={<Login setIsLoggedIn={setIsLoggedIn} />} // This route should have the prop
        />
        <Route
          path="/dashboard/*"
          exact
          element={
            isLoggedIn ? <ProtectedDashboard /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </div>
  );
  function ProtectedDashboard() {
    return <AllPages />;
  }
}
export default App;
