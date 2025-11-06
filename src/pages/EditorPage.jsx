import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useResumeStore from '../store/resumeStore'
import ResumeEditor from '../components/ResumeEditor'
import ResumePreview from '../components/ResumePreview'
import '../styles/EditorPage.css'

export default function EditorPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getResume, createResume, updateResume } = useResumeStore()
  const [resume, setResume] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      const existingResume = getResume(id)
      if (existingResume) {
        setResume(existingResume)
      }
    } else {
      createResume()
      const newResume = useResumeStore.getState().currentResume
      setResume(newResume)
    }
    setLoading(false)
  }, [id])

  const handleUpdateResume = (updates) => {
    if (resume) {
      updateResume(resume.id, updates)
      setResume({
        ...resume,
        ...updates,
        updatedAt: new Date().toISOString()
      })
    }
  }

  const handleExportPDF = () => {
    // 简单的PDF导出实现
    const element = document.querySelector('.resume-preview')
    if (element) {
      window.print()
    }
  }

  if (loading) {
    return <div className="loading">加载中...</div>
  }

  if (!resume) {
    return <div className="error">简历未找到</div>
  }

  return (
    <div className="editor-page">
      <header className="editor-header">
        <div className="header-left">
          <button className="btn-back" onClick={() => navigate('/')}>
            ← 返回
          </button>
          <input
            type="text"
            className="title-input"
            value={resume.title}
            onChange={(e) =>
              handleUpdateResume({ title: e.target.value })
            }
            placeholder="简历标题"
          />
        </div>
        <div className="header-right">
          <button className="btn btn-primary" onClick={handleExportPDF}>
            📥 导出PDF
          </button>
        </div>
      </header>

      <div className="editor-container">
        <div className="editor-panel">
          <ResumeEditor
            resume={resume}
            onUpdate={handleUpdateResume}
          />
        </div>
        <div className="preview-panel">
          <ResumePreview resume={resume} />
        </div>
      </div>
    </div>
  )
}
