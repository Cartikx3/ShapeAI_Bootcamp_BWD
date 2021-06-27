import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NodeCard from "./nodecard";
import ReactCard from "./reactcard";
import PythonCard from "./pythoncard";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <PythonCard />
      <ReactCard />
      <NodeCard />
    </div>
  );
}

export default App;
