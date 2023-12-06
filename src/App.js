import React from "react";
import Nav from "./Pages/Nav";
import Hero from "./Pages/Hero";
function App() {
  return (
    <div className="flex flex-col h-screen bg-[#d3debe]">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
