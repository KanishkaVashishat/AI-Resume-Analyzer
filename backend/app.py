from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from logger import logger
from pdf_utils import extract_text_from_pdf
from ai import analyze_resume
from schemas import ResumeAnalysis

app = FastAPI(title="AI Resume Analyzer")

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

        logger.info("Analysis completed successfully")

        return analysis

    except Exception as e:
        logger.error(f"Analysis failed: {e}")

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )