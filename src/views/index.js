import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";


const Views = ({children}) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Views;