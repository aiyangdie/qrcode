<p align="center"><img src="assets/covers/32-qrcode.jpg" alt="二维码生成 项目封面" width="100%"></p>

<h1 align="center">二维码生成器</h1>

<p align="center">输入链接即刻出码，支持多尺寸导出，纯前端不经过服务器</p>

<p align="center">
  <a href="http://qr.aikex.ink/">在线使用</a> ·
  <a href="LICENSE">MIT 许可</a>
</p>

## 简介

一个不需要后端的二维码工具：粘贴链接或文字，实时生成二维码，调整尺寸后直接下载 PNG。内容只在你本地生成，不会被记录。

## 功能

- **即时生成**：输入即出码，不用点按钮等加载
- **尺寸可调**：按用途选择导出尺寸，打印与屏显都够清晰
- **一键下载**：导出 PNG，文件名带时间戳便于归档
- **纯前端**：不上传内容，不依赖接口
- **简洁界面**：单页完成输入、预览、下载三步

## 技术栈

HTML5 · JavaScript（`qrcode.js`）· Canvas 渲染

## 使用

1. 打开页面，粘贴链接或输入文字
2. 按需调整尺寸
3. 点下载保存 PNG

## 项目结构

```
index.html      页面与交互
js/             生成逻辑
css/            样式
```

## 许可证

[MIT](LICENSE)
