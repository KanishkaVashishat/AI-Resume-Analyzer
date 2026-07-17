import { useState } from "react";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import EmptyState from "./components/EmptyState";
import Loading from "./components/Loading";
import Result from "./components/Result";
import "./styles/App.css";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Navbar />

      <div className="main-container">

        {/* Left Panel */}
        <div className="left-panel">
          <Upload
            setResult={setResult}
            loading={loading}
            setLoading={setLoading}
          />
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          {loading ? (
            <Loading />
          ) : result ? (
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