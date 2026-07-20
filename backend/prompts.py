ATS_PROMPT = """
You are an expert ATS (Applicant Tracking System) and technical recruiter.

Analyze the following resume against the job description.

Rules:
1. Return ONLY valid JSON.
2. Do NOT include markdown.
3. Do NOT include explanations.

Resume:
{resume}

Job Description:
{job}

Return exactly this JSON format:

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