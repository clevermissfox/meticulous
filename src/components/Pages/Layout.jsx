import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Banner from "../Utilities/Banner";
import Header from "../Utilities/Header";
import Footer from "../Utilities/Footer";
import Popup from "./Popup";

export default function Layout() {
  const [bannerIsOpen, setBannerIsOpen] = useState(true);
  const popupRef = useRef(null);
  const location = useLocation();

  function handleBannerClose() {
    setBannerIsOpen(false);
  }

  function handlePopupClose() {
    if (popupRef.current) {
      popupRef.current.close();
    }
  }

  useEffect(() => {
    if (location.pathname === "/") {
      // Check if we're on the home page
      const timer = setTimeout(() => {
        if (popupRef.current) {
          popupRef.current.showModal();
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]); // Add location.pathname as a dependency

  return (
    <>
      {bannerIsOpen && (
        <Banner isOpen={bannerIsOpen} handleClose={handleBannerClose} />
      )}
      <Header />
      <main className="padding-1">
        <Outlet />
      </main>
      <Footer />
      <Popup handlePopupClose={handlePopupClose} popupRef={popupRef} />
    </>
  );
}
