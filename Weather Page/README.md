# Weather Page 项目

一个功能丰富的天气预报网页应用，显示香港地区的天气信息和空气质量数据。

## 🚀 快速开始

### 方法1: 使用启动脚本（推荐）

```bash
./start_server.sh
```

然后在浏览器中访问 `http://localhost:8000`

### 方法2: 手动启动

```bash
# 使用 Python 3
python3 -m http.server 8000

# 或者使用 Python 2
python -m SimpleHTTPServer 8000

# 或者使用 Node.js (需要先安装 http-server)
npx http-server -p 8000
```

## ❌ 常见问题

### CORS 错误

如果你遇到类似以下的错误信息：

```
Access to fetch at 'file:///...' from origin 'null' has been blocked by CORS policy
```

**原因**: 浏览器的安全策略不允许直接从 `file://` 协议访问本地文件。

**解决方案**: 使用本地HTTP服务器运行项目，而不是直接在浏览器中打开HTML文件。

### 数据文件缺失

项目需要以下数据文件：
- `data/aqhi-station-info.json` - 空气质量监测站信息

如果文件缺失，应用会自动使用内置的后备数据。

## 📁 项目结构

```
Weather Page/
├── index.html          # 主页面
├── main.js            # 主要JavaScript逻辑
├── style.css          # 样式文件
├── start_server.sh    # 启动脚本
├── data/              # 数据文件目录
│   └── aqhi-station-info.json
└── images/            # 图片资源
    ├── aqhi-*.png
    └── *.jpg
```

## ✨ 功能特性

- 📍 基于地理位置的天气信息
- 🌡️ 当前温度和天气状况
- 🌧️ 降雨预报
- 💨 空气质量指数 (AQHI)
- 📱 响应式设计

## 🔧 技术栈

- 纯 HTML/CSS/JavaScript
- 香港天文台 API
- OpenStreetMap API
- 地理位置 API

## 📝 开发说明

项目使用香港天文台的开放数据API获取天气信息。主要数据源包括：

- 当前天气: `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en`
- 天气预报: `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en`
- 空气质量: `https://dashboard.data.gov.hk/api/aqhi-individual?format=json`

## 🐛 故障排除

如果遇到问题：

1. 确保使用HTTP服务器运行项目（不要直接打开HTML文件）
2. 检查浏览器控制台的错误信息
3. 确保网络连接正常（需要访问外部API）
4. 允许浏览器访问地理位置信息

## 📄 许可证

此项目仅供学习和演示使用。