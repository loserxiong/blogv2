# Jiasheng's Blog

熊佳盛（Jaason Xiong）的个人网站：<https://jaasonxiong.work>

写文章、放做过的小工具、存旅行和比赛照片，也记录工作经历。

## 内容

| 栏目     | 地址        | 内容存放位置                                     |
| -------- | ----------- | ------------------------------------------------ |
| 首页     | `/`         | `src/pages/index.astro`，模块设置在 `src/data/`  |
| 文章     | `/posts`    | `src/content/posts/*.md`                         |
| 项目     | `/projects` | `src/content/projects/<项目>/index.mdx`          |
| 照片     | `/photos`   | `src/content/photos/*.md`，图片在 `src/assets/photos/uploads/` |
| 标签     | `/tags`     | 由文章标签自动生成                               |
| RSS      | `/rss.xml`、`/atom.xml` | 自动生成                             |

首页由几个模块组成：自我介绍、Posts、Projects、Photos、Career（工作与教育经历）。显示哪些模块、按什么顺序显示，都在后台设置。

## 日常更新：用后台

打开 <https://jaasonxiong.work/admin>，用 GitHub 账号登录（基于 [Decap CMS](https://decapcms.org/)）。

- **文章 / 照片集 / Projects**：新建或修改内容。项目和照片集勾选「在首页展示」后会出现在首页；一个都不勾时，首页自动展示排序最前的项目和最新的照片集。
- **首页设置 → 首页模块**：选择首页显示哪些模块，拖动调整顺序，设置展示数量。
- **首页设置 → 工作经历**：编辑工作经历和教育经历。结束时间留空显示「至今」。

后台保存后会直接提交到 GitHub 的 `main` 分支，Netlify 自动重新部署，一两分钟后线上更新。后台配置在 `public/admin/config.yml`。

## 部署

```
后台或代码提交 → GitHub main 分支 → Netlify 自动构建 → jaasonxiong.work
```

- 托管在 **Netlify**，配置见 `netlify.toml`：Node 22，构建命令 `pnpm run build`，发布 `dist/`。
- 构建包含三步：
  1. `astro check`：类型检查，内容字段填错会让构建失败，线上保持旧版本。
  2. `astro build`：生成静态页面，图片压缩为 WebP。
  3. `postbuild`：生成 Pagefind 站内搜索索引，并运行 `scripts/check-photo-build.mjs` 检查照片都已压缩到体积预算以内。
- 给 `main` 开 Pull Request 时，Netlify 会生成一个 Deploy Preview 预览地址，合并前可以先看效果。

## 本地开发

需要 Node.js 22 和 pnpm。

```bash
pnpm install
```

```bash
pnpm dev
```

打开 <http://localhost:4321>。

其他命令：

```bash
pnpm run build
```

```bash
pnpm run format:write
```

## 配置

- `src/config.ts`：站点信息、导航、社交链接、评论、统计等开关。
- `src/data/home.json`：首页模块与展示数量（后台可改）。
- `src/data/career.json`：工作与教育经历（后台可改）。
- `src/content.config.ts`：文章、项目、照片集的字段定义。

访问统计使用 [Umami](https://umami.is/)，在 `src/config.ts` 的 `ANALYTICS_CONFIG` 中配置。

## 技术栈

[Astro](https://astro.build/) · [React](https://react.dev/) · [Tailwind CSS](https://tailwindcss.com/) · MDX · [Expressive Code](https://expressive-code.com/) · KaTeX · [Pagefind](https://pagefind.app/) · Decap CMS · Netlify

## 致谢

网站基于 [Litos](https://github.com/Dnzzk2/Litos) 主题修改，原主题以 MIT 协议开源，见 [LICENSE](./LICENSE)。
