# 3DM-Mod-Comment
这是一个基于 **Nuxt 3** 开发的评论系统，支持 **二次元风格评论框、Vuex/Pinia 状态管理、后端 API 存储、子评论（回复）** 等功能。
---

## 🚀 功能特点  

✅ **Vuex/Pinia 状态管理**  
✅ **后端 API 存储评论数据**（支持 Nitro / Express / 任意后端）  
✅ **子评论（回复）**  
✅ **点赞 & 踩**  
✅ **按热度 / 时间排序**  

---

## 📦 技术栈  

- **前端**：Nuxt 3 + Vue 3 + Pinia  
- **后端**：Nitro API（可替换 Express、NestJS）  
- **数据库**：支持 JSON 存储（可扩展 MySQL / MongoDB）  

---

## 📸 预览  

![示例截图](public/screenshot.png)  

---

## 🛠️ 安装与运行  

### 1️⃣ 克隆项目  

```sh
git clone https://github.com/OutlinedArc217/3DM-Mod-Comment.git
cd 3DM-Mod-Comment
```

### 2️⃣ 安装依赖  

```sh
pnpm install  # 或 npm install / yarn install
```

### 3️⃣ 运行开发服务器  

```sh
pnpm dev  # 或 npm run dev / yarn dev
```

🚀 访问 `http://localhost:3000` 预览评论系统！  

---

## 🎨 前端目录结构  

```plaintext
📂 nuxt3-comment-system
 ┣ 📂 components     # 组件目录
 ┃ ┣ 📄 CommentBox.vue   # 评论输入框组件（包含二次元图片）
 ┃ ┣ 📄 CommentList.vue  # 评论列表组件
 ┃ ┣ 📄 CommentItem.vue  # 单条评论组件
 ┃ ┗ 📄 ReplyBox.vue     # 子评论输入框
 ┣ 📂 store          # 状态管理（Pinia）
 ┃ ┗ 📄 comments.js  # 评论数据管理
 ┣ 📂 server         # 后端 API（Nitro）
 ┃ ┗ 📂 api
 ┃   ┗ 📄 comments.js  # 评论存储 API
 ┣ 📂 public         # 静态资源
 ┃ ┗ 📄 anime-girl.png  # 二次元妹子装饰图
 ┣ 📄 nuxt.config.ts # Nuxt 配置
 ┣ 📄 package.json   # 依赖管理
 ┗ 📄 README.md      # 项目文档
```

---

## 📡 后端 API 文档  

📌 **基础信息**  
- **后端框架**：Nitro（Nuxt 3 内置 API 服务器）  
- **数据存储**：临时存储（可替换为数据库）  
- **接口格式**：RESTful API + JSON  

### 1️⃣ 获取所有评论  
- **URL**: `/api/comments`  
- **方法**: `GET`  

📌 **示例**  
```http
GET /api/comments
```
📌 **响应**  
```json
[
  {
    "id": 1,
    "username": "User1",
    "avatar": "/assets/user1.png",
    "text": "这是一个测试评论",
    "timestamp": "2025-01-31T12:00:00Z",
    "likes": 5,
    "dislikes": 0,
    "replies": []
  }
]
```

---

### 2️⃣ 提交新评论  
- **URL**: `/api/comments`  
- **方法**: `POST`  

📌 **请求体**  
```json
{
  "username": "New User",
  "avatar": "/assets/user-avatar.png",
  "text": "新评论内容"
}
```
📌 **响应**  
```json
{
  "message": "评论已提交",
  "comment": {
    "id": 2,
    "username": "New User",
    "avatar": "/assets/user-avatar.png",
    "text": "新评论内容",
    "timestamp": "2025-01-31T12:10:00Z",
    "likes": 0,
    "dislikes": 0,
    "replies": []
  }
}
```

---

### 3️⃣ 回复评论（子评论）  
- **URL**: `/api/comments/:id/reply`  
- **方法**: `POST`  

📌 **请求体**  
```json
{
  "username": "ReplyUser",
  "avatar": "/assets/reply-avatar.png",
  "text": "这是一个子评论"
}
```
📌 **响应**  
```json
{
  "message": "回复成功",
  "reply": {
    "id": 102,
    "username": "ReplyUser",
    "avatar": "/assets/reply-avatar.png",
    "text": "这是一个子评论",
    "timestamp": "2025-01-31T12:15:00Z",
    "likes": 0,
    "dislikes": 0
  }
}
```

---

### 4️⃣ 点赞/踩评论  
- **URL**: `/api/comments/:id/vote`  
- **方法**: `POST`  

📌 **请求体**  
```json
{
  "action": "like"
}
```
📌 **响应**  
```json
{
  "message": "点赞成功",
  "likes": 6,
  "dislikes": 0
}
```

---

## ⚡️ 未来扩展  
- ✅ **WebSocket 实时更新**  
- ✅ **用户身份验证（JWT）**  
- ✅ **管理后台（删除评论）**  

---

## 🏆 贡献  

欢迎 PR 和 Issue ！  

---

## 📄 许可证 
[![WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://www.wtfpl.net/)
