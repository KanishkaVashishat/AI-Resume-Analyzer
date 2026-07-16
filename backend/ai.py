import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

def analyze_resume(resume_text, job_description):

    prompt = f"""
You are an expert ATS (Applicant Tracking System) and technical recruiter.

Analyze the following resume against the job description.

Return ONLY valid JSON.

Resume:
{resume_text}

Job Description:
{job_description}

Return this JSON format:

{{
    "summary": "",
    "ats_score": 0,
    "skills_found": [],
    "missing_skills": [],
    "strengths": [],
    "weaknesses": [],
    "suggestions": []
}}
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    print("========== GEMINI RESPONSE ==========")
    print(repr(response.text))
    print("=====================================")

    clean_text = response.text.strip()

    if clean_text.startswith("```json"):
        clean_text = clean_text.replace("```json", "", 1)

    if clean_text.endswith("```"):
        clean_text = clean_text[:-3]

    clean_text = clean_text.strip()

    return json.loads(clean_text)