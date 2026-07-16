function Result({result}){
    return(
        <div>
            <h2>Analysis Result</h2>
            <h3>ATS Score</h3>
            <p>{result.ats_score}</p>
            <h3>summary</h3>
            <p>{result.summary}</p>

            <h3>Skills Found</h3>
            <ul>
                {result.skills_found.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <h3>Missing Skills</h3>
            <ul>
                {result.missing_skills.map((skill,index) =>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
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