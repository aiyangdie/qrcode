# 🔲 qrcode

**纯前端二维码生成器，输入链接即刻生成，支持一键下载。**

[![在线体验](https://img.shields.io/badge/在线体验-点击使用-blue)](https://aiyangdie.github.io/qrcode/)
[![开源协议](https://img.shields.io/github/license/aiyangdie/qrcode)](LICENSE)

![二维码生成器](images/qrcode-logo.svg)

---

## 📌 项目简介

qrcode 是一个简洁美观的在线二维码生成工具，完全在浏览器端运行，无需后端支持。输入任意 URL 即可生成高质量二维码，支持一键下载 PNG 图片，方便分享到微信、QQ 等社交平台。

---

## ✨ 核心特性

- 🚀 **即时生成** — 输入 URL 立即生成二维码，零等待
- 📱 **纯前端实现** — 无需服务器，所有操作在浏览器本地完成
- 💾 **一键下载** — 生成的二维码可保存为 PNG 图片
- 🎨 **动态背景** — 多张背景图片自动轮播，视觉体验出色
- 📐 **高纠错等级** — 采用 QRCode CorrectLevel.H，扫码识别率更高
- 🔍 **URL 校验** — 自动检测输入是否为有效链接（需包含 http/https）
- 📱 **响应式设计** — 完美适配桌面端和移动端
- 🖼️ **SVG 图标** — 矢量 Logo 和 Favicon，高清无锯齿

---

## 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| HTML5 | 页面结构、Canvas API |
| CSS3 | 暗色主题、过渡动画、响应式布局 |
| JavaScript (ES6+) | 二维码生成逻辑、URL 校验、Canvas 下载 |
| [QRCode.js](https://github.com/davidshimjs/qrcodejs) | 二维码生成核心库（CDN 引入） |
| [Noto Sans SC](https://fonts.google.com/noto/specimen/Noto+Sans+SC) | 中文字体（CDN 引入） |
| SVG | 矢量图标与 Favicon |

---

## 🚀 快速开始

### 前置条件

- 现代浏览器（Chrome / Firefox / Edge / Safari / Opera）

### 安装步骤

```bash
git clone https://github.com/aiyangdie/qrcode.git
cd qrcode
```

### 运行

直接在浏览器中打开 `index.html` 即可使用，也可部署到任意 Web 服务器。

### 使用流程

1. 在输入框中输入需要生成二维码的 URL（必须包含 `http://` 或 `https://`）
2. 点击「生成二维码」按钮
3. 生成的二维码会显示在页面上
4. 点击「下载二维码」按钮保存 PNG 图片

---

## 📂 项目结构

```
qrcode/
├── index.html                  # 主页面（含二维码生成逻辑）
├── assets/
│   └── js/
│       └── main.js             # 背景图片轮播动画
├── images/
│   ├── 01.webp                 # 背景图片 1
│   ├── 02.webp                 # 背景图片 2
│   ├── 03.webp                 # 背景图片 3
│   ├── favicon.svg             # 网站图标（SVG）
│   └── qrcode-logo.svg         # 网站 Logo（SVG）
├── .gitignore                  # Git 忽略规则
├── LICENSE                     # MIT 开源协议
├── CNAME                       # GitHub Pages 自定义域名
└── README.md                   # 项目说明
```

---

## 🤝 贡献与许可证

欢迎提交 PR 或 [报告问题](https://github.com/aiyangdie/qrcode/issues)！

1. Fork [本项目](https://github.com/aiyangdie/qrcode)
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 打开 [Pull Request](https://github.com/aiyangdie/qrcode/pulls)

本项目采用 [MIT License](LICENSE) 开源协议。

---

*🔲 输入链接，即刻生成二维码*
