import { useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";
import UploadCard from "./UploadCard";

 function Upload({setResult,
  loading,
  setLoading,}){
   const [file, setFile] = useState(null);
   const [jobDescription , setJobDescription] = useState("");

   const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!file){
        toast.error("Please upload a resume.");
        return;
    }
    if(!jobDescription.trim()){
        toast.error("please enter a job description");
        return;
    }
    const formData = new FormData();
    formData.append("file",file);
    formData.append("job_description",jobDescription);

    try{
        setLoading(true);

        const response = await API.post("/upload",formData);
        setResult(response.data);
        toast.success("Resume analyzed successfully!");
    }catch(error){
        console.error(error);
        toast.error("Analysis failed!")
    }finally{
        setLoading(false)
    }
   };
   return(
     <UploadCard
    file={file}
    setFile={setFile}
    jobDescription={jobDescription}
    setJobDescription={setJobDescription}
    handleSubmit={handleSubmit}
    loading={loading}
  />
   )
}
export default Upload