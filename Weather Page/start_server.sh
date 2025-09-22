#!/bin/bash

# Weather Page 启动脚本
# 这个脚本会启动一个本地HTTP服务器来避免CORS问题

echo "🌤️  正在启动 Weather Page 项目..."
echo "📁 项目目录: $(pwd)"
echo "🌐 服务器端口: 8000"
echo ""

# 检查Python是否可用
if command -v python3 &> /dev/null; then
    echo "✅ 找到 Python3，正在启动服务器..."
    echo "🔗 请在浏览器中访问: http://localhost:8000"
    echo "⏹️  按 Ctrl+C 停止服务器"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ 找到 Python，正在启动服务器..."
    echo "🔗 请在浏览器中访问: http://localhost:8000"
    echo "⏹️  按 Ctrl+C 停止服务器"
    echo ""
    python -m http.server 8000
else
    echo "❌ 错误: 未找到 Python"
    echo "请安装 Python 3.x 或者使用其他HTTP服务器"
    echo ""
    echo "其他选择:"
    echo "1. 如果有Node.js: npx http-server -p 8000"
    echo "2. 如果有PHP: php -S localhost:8000"
    echo "3. 使用VS Code Live Server扩展"
    exit 1
fi