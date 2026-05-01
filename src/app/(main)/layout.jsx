
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/HeaderLogo";
import Navbar from "@/components/shared/NavBar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header/>
      <Navbar/>
       {children}
      <Footer/>
     
    </>
  );
};

export default MainLayout;