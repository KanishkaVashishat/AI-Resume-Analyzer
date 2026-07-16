from fastapi import FastAPI, UploadFile , File, Form
from fastapi.middleware.cors import CORSMiddleware
from pdf_utils import extract_text_from_pdf

from ai import analyze_resume


app = FastAPI(titile="AI Resume Analyzer")

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:5173"],
    allow_credentials = True,
    allow_methods  = ["*"],
    allow_headers = ["*"]
)

@app.get("/")
def home():
    return {"message":"AI Resume Backend is running"}


@app.post("/upload")
async def upload_resume(file:UploadFile=File(...),job_description: str = Form(...)):
    if not file.filename.lower().endswith(".pdf"):
        return {
            "error":"only pdf is allowed."
        }
    resume_text=extract_text_from_pdf(file)

    analysis = analyze_resume(
        resume_text,
        job_description
    )
    return analysis