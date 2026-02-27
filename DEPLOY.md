# 部署到自有服务器指南

本项目为 Next.js 全栈应用（含 API、SQLite、邮件），需在服务器上以 Node 进程运行，不能使用静态导出。

## 一、服务器要求

- **Node.js**：18.x 或 20.x（推荐 20 LTS）
- **系统**：Linux（如 Ubuntu 22.04）或 Windows Server
- **端口**：至少开放一个用于访问（如 3000，或通过 Nginx 用 80/443）

## 二、部署步骤

### 1. 上传代码到服务器

任选其一：

- **Git**：在服务器上 `git clone` 你的仓库，或 `git pull` 更新
- **rsync / scp**：把本地 `web` 目录（或整个项目）同步到服务器，例如：
  ```bash
  rsync -avz --exclude node_modules --exclude .next ./web user@your-server:/opt/qusou/
  ```

### 2. 进入项目目录

```bash
cd /opt/qusou/web   # 换成你实际路径
```

### 3. 安装依赖

```bash
npm ci
# 或
npm install
```

### 4. 配置环境变量

在服务器上创建或编辑 `.env`（与 `package.json` 同级），内容参考本地，**务必改成生产环境的值**：

```env
DATABASE_URL="file:./prisma/dev.db"
ADMIN_PASSWORD=你的强密码

SMTP_HOST=smtp.163.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your@163.com
SMTP_PASS=你的SMTP授权码
CONTACT_TO=contact@qusou.tech
```

注意：  
- `DATABASE_URL` 使用相对路径时，数据库文件会在**当前工作目录**下的 `prisma/dev.db`，部署时请固定工作目录（见下文）。  
- 若希望数据库放在固定位置，可改为绝对路径，例如：`DATABASE_URL="file:/var/lib/qusou/prisma.db"`（需先创建目录并保证进程有写权限）。

### 5. 生成 Prisma Client 并迁移数据库

```bash
npx prisma generate
npx prisma migrate deploy
```

`migrate deploy` 会按已有迁移文件创建/更新表，不会改数据。

### 6. 构建

```bash
npm run build
```

### 7. 启动服务

**方式 A：直接前台运行（仅用于测试）**

```bash
npm run start
```

默认监听 3000 端口，Ctrl+C 会停掉。

**方式 B：使用 PM2（推荐）**

安装 PM2：

```bash
npm install -g pm2
```

在项目根目录（即 `web` 目录）下启动：

```bash
pm2 start npm --name "qusou-web" -- start
```

或使用 ecosystem 文件（推荐，便于管理环境变量和重启）：

在 `web` 目录下创建 `ecosystem.config.cjs`：

```javascript
module.exports = {
  apps: [{
    name: 'qusou-web',
    cwd: __dirname,
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    instances: 1,
    autorestart: true,
    watch: false,
    env: { NODE_ENV: 'production' },
  }],
};
```

然后：

```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup   # 按提示执行，可开机自启
```

常用命令：

- 查看状态：`pm2 status`
- 查看日志：`pm2 logs qusou-web`
- 重启：`pm2 restart qusou-web`

**重要**：无论用哪种方式，都要保证**工作目录是项目的 web 目录**（即包含 `package.json`、`prisma`、`.env` 的目录），这样 `DATABASE_URL="file:./prisma/dev.db"` 才会正确指向数据库文件。

### 8. 使用 Nginx 做反向代理（可选）

若希望用 80/443 访问或配置 HTTPS，可在 Nginx 中增加：

```nginx
server {
    listen 80;
    server_name your-domain.com;  # 改成你的域名或 IP

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

重载 Nginx：`sudo nginx -t && sudo systemctl reload nginx`。  
HTTPS 可用 `certbot` 等工具申请证书并配置 `listen 443 ssl`。

## 三、部署后检查

1. **访问首页**：`http://服务器IP或域名:3000`（若用了 Nginx 则用 80/443）。
2. **联系表单**：打开 `/contact`，提交一条测试，看是否成功并收到邮件。
3. **管理后台**：打开 `/admin/login`，用 `ADMIN_PASSWORD` 登录，在 `/admin/settings` 确认或修改邮件配置，在 `/admin/contacts` 查看留言。

## 四、常见问题

- **数据库找不到 / 表不存在**：确保执行过 `npx prisma migrate deploy`，且工作目录正确，`prisma/dev.db` 存在且可写。
- **邮件发不出去**：检查 `.env` 中 SMTP 与 `CONTACT_TO`，或登录后台在「邮件设置」中配置并保存；若用 163/QQ，需使用 SMTP 授权码而非登录密码。
- **端口被占用**：可改为其他端口，例如 `PORT=3001 npm run start`，或修改 Nginx 的 `proxy_pass` 端口。
- **502 Bad Gateway**：确认 Next 进程已启动（如 `pm2 status`），且 Nginx 的 `proxy_pass` 端口与 Next 监听端口一致。

按上述步骤即可在自有服务器上完成部署。若后续改用 Docker 或 CI/CD，可在同一套环境变量和 Prisma 配置基础上扩展。
