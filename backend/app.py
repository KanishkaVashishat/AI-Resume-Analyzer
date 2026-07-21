from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from logger import logger
from pdf_utils import extract_text_from_pdf
from ai import analyze_resume
from schemas import ResumeAnalysis
from fastapi.responses import FileResponse
from report_generator import generate_report
import os

app = FastAPI(title="AI Resume Analyzer")
latest_analysis = None

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "AI Resume Backend is running"}


@app.post("/upload", response_model=ResumeAnalysis)
async def upload_resume(
    file: UploadFile = File(...),
    job_description: str = Form(...)
):
    logger.info("Resume upload request received")

    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    logger.info(f"Uploaded file: {file.filename}")

    resume_text = extract_text_from_pdf(file)
    logger.info("PDF text extracted successfully")

    try:
        logger.info("Sending resume to Gemini AI")

        analysis = analyze_resume(
            resume_text,
            job_description
        )
        global latest_analysis
        latest_analysis = analysis

        logger.info("Analysis completed successfully")

        return analysis

    except Exception as e:
        logger.error(f"Analysis failed: {e}")

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

@app.get("/download-report")
def download_report():
    global latest_analysis

    if latest_analysis is None:
        raise HTTPException(
            status_code=404,
            detail="No analysis found. Please analyze a resume first."
        )

    filename = generate_report(latest_analysis)

    return FileResponse(
        path=filename,
        filename="AI_Resume_Report.pdf",
        media_type="application/pdf"
    )