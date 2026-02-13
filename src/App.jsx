import React, { useState } from "react";
import "./App.css"; 
import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";

const App = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="app-wrapper">
      <FloatingHearts />
      <Sparkles />

      {page === 1 && <PageOne onYes={() => setPage(2)} />}
      {page === 2 && <PageTwo onNext={() => setPage(3)} />}
      {page === 3 && <PageThree onNext={() => setPage(4)} />}
      {page === 4 && <PageFour onNext={() => setPage(5)} />}
      {page === 5 && <PageFive />}
    </div>
  );
};

export default App;