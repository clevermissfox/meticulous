import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Utilities/Banner";
import Header from "../Utilities/Header";
import Footer from "../Utilities/Footer";
import Popup from "./Popup";

export default function Layout() {
  const [bannerIsOpen, setBannerIsOpen] = useState(true);
  const popupRef = useRef(null);
  // const [popupIsOpen, setPopupIsOpen] = useState(false);

  function handleBannerClose() {
    setBannerIsOpen(false);
  }

  function handlePopupClose() {
    if (popupRef.current) {
      popupRef.current.close();
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (popupRef.current) {
        popupRef.current.showModal();
      }
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {bannerIsOpen && (
        <Banner isOpen={bannerIsOpen} handleClose={handleBannerClose} />
      )}
      <Header />
      <main className="padding-1">
        <div className="wrapper">
          <Outlet />
        </div>
      </main>
      <Footer />
      <Popup handlePopupClose={handlePopupClose} popupRef={popupRef} />
    </>
  );
}
