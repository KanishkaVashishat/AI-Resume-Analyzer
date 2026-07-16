import { useState } from 'react';
 import Upload from "./components/Upload";
 import Result from "./components/Result";

 function App(){
  const[result,setResult] =useState(null);
  return(
    <div>
      <h1>
        AI resume analyzer
      </h1>
      <Upload setResult={setResult} />
      {result && <Result result={result}/>}
    </div>
  );
 }

 export default App;