import ATSScore from "./ATSScore";
import SkillBadge from "./SkillBadge";

function Result({result}){
    return(
        <div>
            <h2>Analysis Result</h2>
            <ATSScore score={result.ats_score} />
            <h3>summary</h3>
            <p>{result.summary}</p>

            <h3>Skills Found</h3>
            <div className="skills-container">
    {result.skills_found.map((skill,index)=>(
        <SkillBadge
            key={index}
            skill={skill}
            type="found"
        />
    ))}
</div>
            <h3>Missing Skills</h3>
            <div className="skills-container">
    {result.missing_skills.map((skill,index)=>(
        <SkillBadge
            key={index}
            skill={skill}
            type="missing"
        />
    ))}
</div>
            <h3>Suggestions</h3>
            <ul>
                {result.suggestions.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default Result