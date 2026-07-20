import os
import json
from dotenv import load_dotenv
from google import genai

from prompts import ATS_PROMPT
from logger import logger

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise ValueError("GEMINI_API_KEY not found in .env")

client = genai.Client(api_key=API_KEY)


def analyze_resume(resume_text, job_description):

    prompt = ATS_PROMPT.format(
        resume=resume_text,
        job=job_description
    )

    logger.info("Sending request to Gemini AI...")

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    logger.info("Response received from Gemini")

    clean_text = (
        response.text.strip()
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    try:
        analysis = json.loads(clean_text)

        logger.info(
            f"ATS Score: {analysis.get('ats_score')} | "
            f"Skills Found: {len(analysis.get('skills_found', []))}"
        )

        return analysis

    except json.JSONDecodeError:
        logger.error("Gemini returned invalid JSON")
        logger.error(clean_text)

        raise ValueError("Invalid JSON received from Gemini.")