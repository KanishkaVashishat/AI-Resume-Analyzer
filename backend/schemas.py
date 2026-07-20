from pydantic import BaseModel

class ResumeAnalysis(BaseModel):
    summary: str
    ats_score: int
    skills_found: list[str]
    missing_skills: list[str]
    strengths: list[str]
    weaknesses: list[str]
    suggestions: list[str]