# ⭐ ResumeStar - 简历生成与分享平台

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-19.1.1-blue.svg)
![Vite](https://img.shields.io/badge/vite-7.1.7-green.svg)
![GitHub Stars](https://img.shields.io/github/stars/3397023886/utry1?style=social)

> 🎯 **一个为大学生和求职者设计的专业简历生成工具** - 5分钟生成专业简历，支持多种模板、实时预览、PDF导出。

## 🌐 在线演示

**👉 [点击这里立即体验](https://3397023886.github.io/utry1/)**

无需安装任何依赖，直接在浏览器中使用！

## ✨ 核心功能

- **📝 多种模板** - 现代、经典、创意等多种专业模板可选
- **👁️ 实时预览** - 编辑时即时查看简历效果（左编辑右预览）
- **📥 PDF导出** - 一键下载专业PDF格式简历
- **💾 本地保存** - 自动保存到浏览器本地存储，数据永不丢失
- **🎨 响应式设计** - 完美适配桌面、平板、手机等各种设备
- **⚡ 快速编辑** - 直观的编辑界面，快速填充信息
- **🔒 隐私保护** - 所有数据存储在本地，无需上传服务器

## 🎯 为什么选择 ResumeStar？

| 功能 | ResumeStar | 传统方式 |
|------|-----------|--------|
| 创建时间 | ⚡ 5分钟 | 30分钟+ |
| 模板选择 | 🎨 多种专业模板 | 单一模板 |
| 实时预览 | ✅ 即时查看效果 | ❌ 需要反复切换 |
| 数据安全 | 🔒 本地存储 | ❌ 需要上传服务器 |
| 成本 | 💰 完全免费 | 💸 可能需要付费 |
| 易用性 | 😊 极其简单 | 😐 需要学习 |

## 🚀 快速开始

### 方式一：在线使用（推荐）

直接访问 👉 **[https://3397023886.github.io/utry1/](https://3397023886.github.io/utry1/)**

### 方式二：本地运行

#### 前置要求
- Node.js 14.0 或更高版本
- npm 6.0 或更高版本

#### 安装步骤

```bash
# 1. 克隆项目
git clone https://github.com/3397023886/utry1.git
cd utry1

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 打开浏览器访问 http://localhost:5173
```

#### 构建生产版本

```bash
npm run build
```

生成的文件将在 `dist` 目录中。

## 📖 使用指南

### 1️⃣ 创建简历

1. 点击首页的"开始创建"按钮
2. 选择你喜欢的模板（现代、经典或创意风格）
3. 进入编辑页面

### 2️⃣ 填写信息

编辑器包含以下部分：

- **个人信息** - 姓名、邮箱、电话、位置、职业总结
- **工作经验** - 公司、职位、时间、工作描述
- **教育背景** - 学校、学位、专业、毕业时间
- **技能** - 列出你的技能（用逗号分隔）
- **项目** - 展示你的项目成果和链接

### 3️⃣ 预览和导出

- 右侧实时显示简历预览
- 点击"导出PDF"按钮下载简历
- 点击"返回"回到首页

### 4️⃣ 管理简历

- 在首页查看所有简历
- 可以编辑、删除或创建新简历
- 访问仪表板查看统计信息

## 🏗️ 项目结构

```
ResumeStar/
├── public/                    # 静态资源
├── src/
│   ├── components/           # React组件
│   │   ├── ResumeEditor.jsx      # 简历编辑器
│   │   └── ResumePreview.jsx     # 简历预览
│   ├── pages/                # 页面组件
│   │   ├── HomePage.jsx          # 首页
│   │   ├── EditorPage.jsx        # 编辑器页面
│   │   └── DashboardPage.jsx     # 仪表板页面
│   ├── store/                # 状态管理
│   │   └── resumeStore.js        # Zustand存储
│   ├── styles/               # 样式文件
│   │   ├── HomePage.css
│   │   ├── EditorPage.css
│   │   ├── ResumeEditor.css
│   │   ├── ResumePreview.css
│   │   └── DashboardPage.css
│   ├── App.jsx               # 主应用组件
│   ├── main.jsx              # 入口文件
│   └── index.css             # 全局样式
├── .github/workflows/        # GitHub Actions配置
│   └── deploy.yml            # 自动部署配置
├── index.html                # HTML模板
├── package.json              # 项目配置
├── vite.config.js            # Vite配置
└── README.md                 # 项目说明
```

## 🛠️ 技术栈

- **前端框架** - [React](https://react.dev) 19.1.1
- **构建工具** - [Vite](https://vitejs.dev) 7.1.7
- **路由管理** - [React Router](https://reactrouter.com) 6
- **状态管理** - [Zustand](https://github.com/pmndrs/zustand)
- **HTTP客户端** - [Axios](https://axios-http.com)
- **样式** - CSS3 + 响应式设计

## 📦 依赖

```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^6.x.x",
    "zustand": "^4.x.x",
    "axios": "^1.x.x"
  }
}
```

## 🎯 功能对比

### 已实现 ✅

- ✅ 多模板支持（现代、经典、创意）
- ✅ 实时预览（左编辑右预览）
- ✅ 本地数据存储（浏览器localStorage）
- ✅ 响应式设计（支持各种设备）
- ✅ 简历编辑和管理
- ✅ PDF导出（使用浏览器打印功能）
- ✅ 简历统计仪表板
- ✅ 完整的文档和使用指南

### 计划中的功能 🔄

- 🔄 用户认证和云端同步
- 🔄 更多专业模板
- 🔄 简历分享和协作
- 🔄 模板定制功能
- 🔄 多语言支持
- 🔄 暗黑模式
- 🔄 简历分析和建议

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

1. Fork 本仓库
2. 创建你的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个Pull Request

详见 [CONTRIBUTING.md](CONTRIBUTING.md)

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 👨‍💻 作者

**ResumeStar Team**

- GitHub: [@3397023886](https://github.com/3397023886)

## 💬 反馈和支持

如有问题或建议，欢迎：

- 📝 提交 [Issue](https://github.com/3397023886/utry1/issues)
- 💬 在 [Discussions](https://github.com/3397023886/utry1/discussions) 中讨论
- 📧 发送邮件反馈

## 🙏 致谢

感谢所有为这个项目做出贡献的人！

特别感谢：
- React 和 Vite 团队
- 所有使用和支持这个项目的用户

## 📊 项目统计

- 📝 代码行数：2000+
- 🎨 UI组件：5个
- 📄 文档页面：3个
- ⚡ 加载时间：< 2秒
- 📱 设备支持：桌面、平板、手机

## 🌟 如果这个项目对你有帮助

请给个Star！⭐ 这会帮助更多人发现这个项目。

```
https://github.com/3397023886/utry1
```

---

**Made with ❤️ by ResumeStar Team**

**[👉 立即体验](https://3397023886.github.io/utry1/)**
