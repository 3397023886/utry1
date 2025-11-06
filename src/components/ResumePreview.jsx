import '../styles/ResumePreview.css'

export default function ResumePreview({ resume }) {
  const { data } = resume
  const { personalInfo, experience, education, skills, projects } = data

  return (
    <div className="resume-preview">
      <div className="preview-content">
        {/* 个人信息部分 */}
        <section className="section personal-section">
          <h1 className="name">{personalInfo.name}</h1>
          <div className="contact-info">
            <span>{personalInfo.email}</span>
            <span>•</span>
            <span>{personalInfo.phone}</span>
            <span>•</span>
            <span>{personalInfo.location}</span>
          </div>
          {personalInfo.summary && (
            <p className="summary">{personalInfo.summary}</p>
          )}
        </section>

        {/* 工作经验 */}
        {experience.length > 0 && (
          <section className="section">
            <h2 className="section-title">工作经验</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="item-header">
                  <h3 className="position">{exp.position}</h3>
                  <span className="date">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="company">{exp.company}</p>
                {exp.description && (
                  <p className="description">{exp.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* 教育背景 */}
        {education.length > 0 && (
          <section className="section">
            <h2 className="section-title">教育背景</h2>
            {education.map((edu) => (
              <div key={edu.id} className="education-item">
                <div className="item-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="date">{edu.graduationDate}</span>
                </div>
                <p className="school">{edu.school}</p>
                <p className="field">{edu.field}</p>
              </div>
            ))}
          </section>
        )}

        {/* 技能 */}
        {skills.length > 0 && (
          <section className="section">
            <h2 className="section-title">技能</h2>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 项目 */}
        {projects.length > 0 && (
          <section className="section">
            <h2 className="section-title">项目</h2>
            {projects.map((project) => (
              <div key={project.id} className="project-item">
                <h3 className="project-name">{project.name}</h3>
                {project.description && (
                  <p className="description">{project.description}</p>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    {project.link}
                  </a>
                )}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  )
}
