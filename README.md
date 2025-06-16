# qrcode

一个简洁、美观的在线二维码生成工具，无需后端支持，纯前端实现。

![二维码生成工具](https://github.com/aiyangdie/qrcode/raw/main/images/qrcode-logo.svg)

## 功能特点

- ✨ 纯前端实现，无需服务器支持
- 🚀 快速生成高质量二维码
- 📱 响应式设计，适配各种设备
- 🔄 实时生成二维码
- 💾 一键下载生成的二维码图片
- 🎨 美观的用户界面和动态背景

## 技术栈

- HTML5 + CSS3 + JavaScript
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) - 用于生成二维码
- 响应式设计，适配移动端和桌面端
- SVG矢量图标

## 使用方法

1. 在输入框中输入需要生成二维码的URL（必须包含http://或https://）
2. 点击"生成二维码"按钮
3. 生成的二维码会显示在页面上
4. 点击"下载二维码"按钮保存图片

## 在线体验

[https://aiyangdie.github.io/qrcode/](https://aiyangdie.github.io/qrcode/)

## 本地运行

由于项目是纯前端实现，可以直接在浏览器中打开`index.html`文件使用，也可以部署到任何Web服务器上。

```bash
# 克隆仓库
git clone https://github.com/aiyangdie/qrcode.git

# 进入项目目录
cd qrcode

# 直接打开index.html或使用任何HTTP服务器
```

## 项目结构

```
├── index.html          # 主页面
├── assets/             # 静态资源
│   └── js/             # JavaScript文件
│       └── main.js     # 背景动画脚本
├── images/             # 图片资源
│   ├── 01.webp         # 背景图片1
│   ├── 02.webp         # 背景图片2
│   ├── 03.webp         # 背景图片3
│   ├── favicon.svg     # 网站图标
│   └── qrcode-logo.svg # 网站Logo
└── README.md           # 项目说明文件
```

## 特性

- **无服务器依赖**：完全客户端实现，无需后端支持
- **高质量二维码**：使用QRCode.js生成清晰可扫描的二维码
- **即时生成**：输入URL后立即生成二维码
- **一键下载**：便捷地保存生成的二维码图片
- **美观界面**：现代化UI设计，动态背景效果
- **响应式布局**：完美适配各种屏幕尺寸

## 浏览器兼容性

- Chrome
- Firefox
- Safari
- Edge
- Opera

## 许可证

[MIT License](https://github.com/aiyangdie/qrcode/blob/main/LICENSE)

## 贡献

欢迎提交问题和改进建议！

1. Fork [本项目](https://github.com/aiyangdie/qrcode)
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个[Pull Request](https://github.com/aiyangdie/qrcode/pulls)

## 联系方式

如有任何问题或建议，请通过[GitHub Issues](https://github.com/aiyangdie/qrcode/issues)与我联系。

---

希望这个工具对您有所帮助！ 