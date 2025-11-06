import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useResumeStore from '../store/resumeStore'
import '../styles/HomePage.css'

export default function HomePage() {
  const navigate = useNavigate()
  const { resumes, createResume, deleteResume } = useResumeStore()
  const [showTemplates, setShowTemplates] = useState(false)

  const templates = [
    { id: 'modern', name: '现代风格', description: '简洁现代的设计' },
    { id: 'classic', name: '经典风格', description: '传统专业的设计' },
    { id: 'creative', name: '创意风格', description: '富有创意的设计' }
  ]

  const handleCreateResume = (template) => {
    createResume(template)
    const newResume = useResumeStore.getState().currentResume
    navigate(`/editor/${newResume.id}`)
  }

  const handleEditResume = (id) => {
    navigate(`/editor/${id}`)
  }

  return (
    <div className="home-page">
      <header className="header">
        <div className="header-content">
          <h1>⭐ ResumeStar</h1>
          <p>快速生成专业简历，展示你的才华</p>
        </div>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>欢迎使用 ResumeStar</h2>
          <p>
            一个强大的简历生成工具，帮助你创建专业、美观的简历。
            支持多种模板、实时预览和PDF导出。
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setShowTemplates(!showTemplates)}
          >
            {showTemplates ? '隐藏模板' : '开始创建'}
          </button>
        </section>

        {showTemplates && (
          <section className="templates">
            <h3>选择模板</h3>
            <div className="template-grid">
              {templates.map((template) => (
                <div key={template.id} className="template-card">
                  <h4>{template.name}</h4>
                  <p>{template.description}</p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleCreateResume(template.id)}
                  >
                    使用此模板
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {resumes.length > 0 && (
          <section className="resumes">
            <h3>我的简历</h3>
            <div className="resume-list">
              {resumes.map((resume) => (
                <div key={resume.id} className="resume-item">
                  <div className="resume-info">
                    <h4>{resume.title}</h4>
                    <p className="template-tag">{resume.template}</p>
                    <p className="date">
                      更新于 {new Date(resume.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="resume-actions">
                    <button
                      className="btn btn-small btn-primary"
                      onClick={() => handleEditResume(resume.id)}
                    >
                      编辑
                    </button>
                    <button
                      className="btn btn-small btn-danger"
                      onClick={() => deleteResume(resume.id)}
                    >
                      删除
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="features">
          <h3>主要功能</h3>
          <div className="feature-grid">
            <div className="feature-card">
              <span className="icon">📝</span>
              <h4>多种模板</h4>
              <p>选择适合你的专业模板</p>
            </div>
            <div className="feature-card">
              <span className="icon">👁️</span>
              <h4>实时预览</h4>
              <p>即时查看编辑效果</p>
            </div>
            <div className="feature-card">
              <span className="icon">📥</span>
              <h4>导出PDF</h4>
              <p>一键下载专业简历</p>
            </div>
            <div className="feature-card">
              <span className="icon">💾</span>
              <h4>云端保存</h4>
              <p>自动保存你的数据</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 ResumeStar. 帮助大学生创建专业简历。</p>
      </footer>
    </div>
  )
}
