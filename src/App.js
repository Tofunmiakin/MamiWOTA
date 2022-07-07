import React from "react";
import Navigations from "./Components/Navigation";
import FirstSection from "./Components/FirstSection";
import LatestArtworks from "./Components/LatestArtworks";
import MostPopular from "./Components/MostPopular";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-Grotesk ">
      <Navigations />
      <FirstSection />
      <LatestArtworks className="" />
      <MostPopular />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
