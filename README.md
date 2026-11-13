# 云寓租房 · 管理后台

基于 **Vue 3 + Vite + Element Plus** 的租房平台管理端，负责房源、用户和系统配置管理。

## 功能

- 管理员登录 / 退出
- 房源管理：列表、详情、新增、编辑、上下架、缓存刷新
- 用户管理：C 端用户查询、编辑
- 系统管理：管理员、角色、菜单、字典、参数
- 文件上传：对接后端文件服务与阿里云 OSS
- 通用能力：动态路由、按钮权限、请求封装、全局错误提示

## 技术栈

| 分类 | 技术 |
| :--- | :--- |
| 框架 | Vue 3 |
| 构建 | Vite 6 |
| UI | Element Plus |
| 状态管理 | Pinia + pinia-plugin-persistedstate |
| 路由 | Vue Router 4 |
| 请求 | Axios |
| 加密 | crypto-js |
| 样式 | Sass |

## 目录结构

```text
src
├── api          # 接口定义
├── assets       # 图片、样式等静态资源
├── components   # 通用组件
├── constants    # 常量与配置
├── layout       # 布局
├── router       # 路由与守卫
├── stores       # Pinia 状态
├── utils        # 请求、加密、权限等工具
└── views        # 页面
    ├── Login    # 登录
    ├── House    # 房源管理
    ├── User     # 用户管理
    ├── System   # 系统管理
    └── Error    # 错误页
```

## 本地运行

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务

```bash
npm run dev
```

访问终端输出的地址（默认 `http://localhost:5173`）。

### 3. 生产构建

```bash
npm run build
```
> 仓库中已提交 `dist/` 构建产物，可直接用静态服务器部署，无需在本地构建；修改源码后重新执行上述命令。

### 4. 本地预览构建产物

```bash
npm run preview
```

## 后端地址配置

开发环境通过 Vite 代理访问网关，配置在 `vite.config.js`：

```js
server: {
  proxy: {
    '/dev-api': {
      target: 'http://127.0.0.1:18080',
      changeOrigin: true
    }
  }
}
```

环境变量文件：

| 文件 | 用途 |
| :--- | :--- |
| `.env.development` | 开发环境，接口前缀 `/dev-api` |
| `.env.staging` | 测试环境 |
| `.env.production` | 生产环境 |

后端网关默认地址：`http://127.0.0.1:18080`。

## 登录

默认管理员账号由后端 `db.sql` 初始化数据提供，仅用于本地演示。管理端登录时手机号和密码会经过 AES 加密后提交，具体加密方式见 `src/utils` 与后端登录接口。

## 说明

- 本项目为个人学习/实战项目，非生产系统。
- 仓库中的默认密码、密钥等仅用于本地开发，请勿直接用于生产环境。
