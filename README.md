# Zoey 的个人主页

一个轻量、适配手机的中文个人网站，使用 HTML、CSS 和少量 JavaScript，无需安装依赖或运行构建。

网站地址：<https://gaoyuezoey.github.io/>

## 修改内容

- `index.html`：页面文字、导航和 GitHub 链接。
- `styles.css`：颜色、字体、排版和手机适配。
- `assets/profile-layout.css`：资料卡、支持方向、代表项目与首页细节。
- `favicon.svg`：浏览器标签页图标。
- `script.js`：资料卡展开、页面内导航与页脚年份。

可以直接在 GitHub 打开文件，点击编辑并提交。GitHub Pages 会自动更新网站，通常需要几分钟。

## 网站发布

GitHub 仓库的 **Settings → Pages** 使用 **Deploy from a branch**，分支为 **main**，目录为 **/ (root)**。

`.nojekyll` 让 GitHub Pages 直接发布静态文件。所有页面资源都在仓库中，不依赖外部字体或图片服务。
