import { useState } from "react";
import API from "../services/api";
 function Upload({setResult}){
   const [file, setFile] = useState(null);
   const [jobDescription , setJobDescription] = useState("");
   const[loading,setLoading] = useState(false);

   const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!file){
        alert("Please upload a resume!");
        return;
    }
    if(!jobDescription.trim()){
        alert("please enter a job description");
        return;
    }
    const formData = new FormData();
    formData.append("file",file);
    formData.append("job_description",jobDescription);

    try{
        setLoading(true);

        const response = await API.post("/upload",formData);
        setResult(response.data);
    }catch(error){
        console.error(error);
        alert("something went wrong")
    }finally{
        setLoading(false)
    }
   };
   return(
    <form onSubmit={handleSubmit}>
        <div>
            <label>Upload Resume(pdf)</label>
            <br />
            <input 
            type="file"
            accept=".pdf"
            onChange={(e)=>setFile(e.target.files[0])} />

        </div>
        <br />
        <div>
             <label>Job Description</label>
             <br />
             <textarea
             rows="8"
             cols="60"
             value={jobDescription}
             onChange={(e)=>setJobDescription(e.target.value)} />
        </div>
        < br/>
        <button type="submit" disabled={loading}>{loading?"Analyzing...":"Analyze resume"}</button>
    </form>
   )
}
export default Upload