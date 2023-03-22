import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ANALYTICS from "./components/Analytics";
import NewsLetter from "./components/NewsLetter";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ANALYTICS />
      <NewsLetter />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
