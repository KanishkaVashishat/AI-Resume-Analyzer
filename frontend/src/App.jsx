import { useState } from "react";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import EmptyState from "./components/EmptyState";
import Result from "./components/Result";
import "./styles/App.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <>
      <Navbar />

      <div className="main-container">

        <div className="left-panel">
          <Upload setResult={setResult} />
        </div>

        <div className="right-panel">
          {result ? (
            <Result result={result} />
          ) : (
            <EmptyState />
          )}
        </div>

      </div>
    </>
  );
}

export default App;