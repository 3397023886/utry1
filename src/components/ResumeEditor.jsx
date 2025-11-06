import { useState } from 'react'
import '../styles/ResumeEditor.css'

export default function ResumeEditor({ resume, onUpdate }) {
  const [activeTab, setActiveTab] = useState('personal')

  const handlePersonalInfoChange = (field, value) => {
    onUpdate({
      data: {
        ...resume.data,
        personalInfo: {
          ...resume.data.personalInfo,
          [field]: value
        }
      }
    })
  }

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...resume.data.experience]
    newExperience[index] = {
      ...newExperience[index],
      [field]: value
    }
    onUpdate({
      data: {
        ...resume.data,
        experience: newExperience
      }
    })
  }

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...resume.data.education]
    newEducation[index] = {
      ...newEducation[index],
      [field]: value
    }
    onUpdate({
      data: {
        ...resume.data,
        education: newEducation
      }
    })
  }

  const handleSkillsChange = (value) => {
    const skills = value.split(',').map(s => s.trim())
    onUpdate({
      data: {
        ...resume.data,
        skills
      }
    })
  }

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...resume.data.projects]
    newProjects[index] = {
      ...newProjects[index],
      [field]: value
    }
    onUpdate({
      data: {
        ...resume.data,
        projects: newProjects
      }
    })
  }

  const addExperience = () => {
    onUpdate({
      data: {
        ...resume.data,
        experience: [
          ...resume.data.experience,
          {
            id: Date.now().toString(),
            company: '新公司',
            position: '职位',
            startDate: '',
            endDate: '',
            description: ''
          }
        ]
      }
    })
  }

  const addEducation = () => {
    onUpdate({
      data: {
        ...resume.data,
        education: [
          ...resume.data.education,
          {
            id: Date.now().toString(),
            school: '学校',
            degree: '学位',
            field: '专业',
            graduationDate: ''
          }
        ]
      }
    })
  }

  const addProject = () => {
    onUpdate({
      data: {
        ...resume.data,
        projects: [
          ...resume.data.projects,
          {
            id: Date.now().toString(),
            name: '新项目',
            description: '',
            link: ''
          }
        ]
      }
    })
  }

  return (
    <div className="resume-editor">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          个人信息
        </button>
        <button
          className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          工作经验
        </button>
        <button
          className={`tab ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          教育背景
        </button>
        <button
          className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          技能
        </button>
        <button
          className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          项目
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'personal' && (
          <section className="form-section">
            <h3>个人信息</h3>
            <div className="form-group">
              <label>姓名</label>
              <input
                type="text"
                value={resume.data.personalInfo.name}
                onChange={(e) =>
                  handlePersonalInfoChange('name', e.target.value)
                }
              />
            </div>
            <div className="form-group">
              <label>邮箱</label>
              <input
                type="email"
                value={resume.data.personalInfo.email}
                onChange={(e) =>
                  handlePersonalInfoChange('email', e.target.value)
                }
              />
            </div>
            <div className="form-group">
              <label>电话</label>
              <input
                type="tel"
                value={resume.data.personalInfo.phone}
                onChange={(e) =>
                  handlePersonalInfoChange('phone', e.target.value)
                }
              />
            </div>
            <div className="form-group">
              <label>位置</label>
              <input
                type="text"
                value={resume.data.personalInfo.location}
                onChange={(e) =>
                  handlePersonalInfoChange('location', e.target.value)
                }
              />
            </div>
            <div className="form-group">
              <label>职业总结</label>
              <textarea
                value={resume.data.personalInfo.summary}
                onChange={(e) =>
                  handlePersonalInfoChange('summary', e.target.value)
                }
                rows="4"
              />
            </div>
          </section>
        )}

        {activeTab === 'experience' && (
          <section className="form-section">
            <h3>工作经验</h3>
            {resume.data.experience.map((exp, index) => (
              <div key={exp.id} className="form-item">
                <div className="form-group">
                  <label>公司</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) =>
                      handleExperienceChange(index, 'company', e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>职位</label>
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) =>
                      handleExperienceChange(index, 'position', e.target.value)
                    }
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>开始日期</label>
                    <input
                      type="month"
                      value={exp.startDate}
                      onChange={(e) =>
                        handleExperienceChange(index, 'startDate', e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>结束日期</label>
                    <input
                      type="month"
                      value={exp.endDate}
                      onChange={(e) =>
                        handleExperienceChange(index, 'endDate', e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>描述</label>
                  <textarea
                    value={exp.description}
                    onChange={(e) =>
                      handleExperienceChange(index, 'description', e.target.value)
                    }
                    rows="3"
                  />
                </div>
              </div>
            ))}
            <button className="btn btn-secondary" onClick={addExperience}>
              + 添加工作经验
            </button>
          </section>
        )}

        {activeTab === 'education' && (
          <section className="form-section">
            <h3>教育背景</h3>
            {resume.data.education.map((edu, index) => (
              <div key={edu.id} className="form-item">
                <div className="form-group">
                  <label>学校</label>
                  <input
                    type="text"
                    value={edu.school}
                    onChange={(e) =>
                      handleEducationChange(index, 'school', e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>学位</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(index, 'degree', e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>专业</label>
                  <input
                    type="text"
                    value={edu.field}
                    onChange={(e) =>
                      handleEducationChange(index, 'field', e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>毕业日期</label>
                  <input
                    type="month"
                    value={edu.graduationDate}
                    onChange={(e) =>
                      handleEducationChange(index, 'graduationDate', e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
            <button className="btn btn-secondary" onClick={addEducation}>
              + 添加教育背景
            </button>
          </section>
        )}

        {activeTab === 'skills' && (
          <section className="form-section">
            <h3>技能</h3>
            <div className="form-group">
              <label>技能（用逗号分隔）</label>
              <textarea
                value={resume.data.skills.join(', ')}
                onChange={(e) => handleSkillsChange(e.target.value)}
                rows="4"
                placeholder="例如：JavaScript, React, Node.js"
              />
            </div>
          </section>
        )}

        {activeTab === 'projects' && (
          <section className="form-section">
            <h3>项目</h3>
            {resume.data.projects.map((project, index) => (
              <div key={project.id} className="form-item">
                <div className="form-group">
                  <label>项目名称</label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) =>
                      handleProjectChange(index, 'name', e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>描述</label>
                  <textarea
                    value={project.description}
                    onChange={(e) =>
                      handleProjectChange(index, 'description', e.target.value)
                    }
                    rows="3"
                  />
                </div>
                <div className="form-group">
                  <label>链接</label>
                  <input
                    type="url"
                    value={project.link}
                    onChange={(e) =>
                      handleProjectChange(index, 'link', e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
            <button className="btn btn-secondary" onClick={addProject}>
              + 添加项目
            </button>
          </section>
        )}
      </div>
    </div>
  )
}
