import { useNavigate } from 'react-router-dom'
import useResumeStore from '../store/resumeStore'
import '../styles/DashboardPage.css'

export default function DashboardPage() {
  const navigate = useNavigate()
  const { resumes, createResume, deleteResume } = useResumeStore()

  const handleNewResume = () => {
    createResume()
    const newResume = useResumeStore.getState().currentResume
    navigate(`/editor/${newResume.id}`)
  }

  const handleEditResume = (id) => {
    navigate(`/editor/${id}`)
  }

  const stats = {
    totalResumes: resumes.length,
    lastUpdated: resumes.length > 0 
      ? new Date(resumes[resumes.length - 1].updatedAt).toLocaleDateString()
      : '无'
  }

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>📊 我的简历</h1>
        <button className="btn btn-primary" onClick={handleNewResume}>
          + 创建新简历
        </button>
      </header>

      <div className="dashboard-content">
        <section className="stats">
          <div className="stat-card">
            <h3>{stats.totalResumes}</h3>
            <p>简历总数</p>
          </div>
          <div className="stat-card">
            <h3>{stats.lastUpdated}</h3>
            <p>最后更新</p>
          </div>
        </section>

        {resumes.length === 0 ? (
          <section className="empty-state">
            <p>还没有创建简历</p>
            <button className="btn btn-primary" onClick={handleNewResume}>
              开始创建
            </button>
          </section>
        ) : (
          <section className="resumes-table">
            <table>
              <thead>
                <tr>
                  <th>标题</th>
                  <th>模板</th>
                  <th>创建时间</th>
                  <th>更新时间</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {resumes.map((resume) => (
                  <tr key={resume.id}>
                    <td>{resume.title}</td>
                    <td>{resume.template}</td>
                    <td>{new Date(resume.createdAt).toLocaleDateString()}</td>
                    <td>{new Date(resume.updatedAt).toLocaleDateString()}</td>
                    <td>
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </div>
    </div>
  )
}
