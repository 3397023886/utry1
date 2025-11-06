import { create } from 'zustand'

const useResumeStore = create((set) => ({
  resumes: JSON.parse(localStorage.getItem('resumes')) || [],
  currentResume: null,

  // 获取所有简历
  getResumes: () => {
    const stored = localStorage.getItem('resumes')
    return stored ? JSON.parse(stored) : []
  },

  // 创建新简历
  createResume: (template = 'modern') => {
    set((state) => {
      const newResume = {
        id: Date.now().toString(),
        title: '新简历',
        template,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        data: {
          personalInfo: {
            name: '您的名字',
            email: 'your@email.com',
            phone: '+86 1234567890',
            location: '城市, 国家',
            summary: '简短的职业总结'
          },
          experience: [
            {
              id: '1',
              company: '公司名称',
              position: '职位',
              startDate: '2023-01',
              endDate: '至今',
              description: '工作描述'
            }
          ],
          education: [
            {
              id: '1',
              school: '学校名称',
              degree: '学位',
              field: '专业',
              graduationDate: '2024-06'
            }
          ],
          skills: ['技能1', '技能2', '技能3'],
          projects: [
            {
              id: '1',
              name: '项目名称',
              description: '项目描述',
              link: 'https://example.com'
            }
          ]
        }
      }

      const resumes = [...state.resumes, newResume]
      localStorage.setItem('resumes', JSON.stringify(resumes))
      
      return {
        resumes,
        currentResume: newResume
      }
    })
  },

  // 更新简历
  updateResume: (id, updates) => {
    set((state) => {
      const resumes = state.resumes.map((r) =>
        r.id === id
          ? {
              ...r,
              ...updates,
              updatedAt: new Date().toISOString()
            }
          : r
      )
      localStorage.setItem('resumes', JSON.stringify(resumes))
      
      return {
        resumes,
        currentResume:
          state.currentResume?.id === id
            ? resumes.find((r) => r.id === id)
            : state.currentResume
      }
    })
  },

  // 删除简历
  deleteResume: (id) => {
    set((state) => {
      const resumes = state.resumes.filter((r) => r.id !== id)
      localStorage.setItem('resumes', JSON.stringify(resumes))
      
      return {
        resumes,
        currentResume:
          state.currentResume?.id === id ? null : state.currentResume
      }
    })
  },

  // 设置当前简历
  setCurrentResume: (resume) => {
    set({ currentResume: resume })
  },

  // 获取简历
  getResume: (id) => {
    const stored = localStorage.getItem('resumes')
    const resumes = stored ? JSON.parse(stored) : []
    return resumes.find((r) => r.id === id)
  }
}))

export default useResumeStore
