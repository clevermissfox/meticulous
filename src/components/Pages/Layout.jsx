import { useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Utilities/Banner";
import Header from "../Utilities/Header";
import Footer from "../Utilities/Footer";

export default function Layout() {
  const [bannerIsOpen, setBannerIsOpen] = useState(true);
  function handleBannerClose() {
    setBannerIsOpen(false);
  }
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
    </>
  );
}
