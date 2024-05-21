<?php
// 检查请求方法是否为 PUT 请求 第一次为 GET 请求 故而不响应
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    // 获取 PUT 请求的数据
    $data = json_decode(file_get_contents('php://input'), true);
    // 处理数据
    if (!empty($data)) {
        // 从数据中获取需要的值
        $value = $data['value'];

        // 返回成功响应
        http_response_code(200);
        echo json_encode(array('message' => 'PUT 请求处理成功', 'value' => $value)); // 返回数据至前端
        exit;
    } else {
        // 返回错误响应
        http_response_code(400);
        echo json_encode(array('message' => '无效的数据'));
        exit;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>实时监听输入范围和发送PUT请求</title>
</head>
<body>
    <h1>实时监听输入范围和发送PUT请求</h1>
    
    <input type="range" id="myRange" min="0" max="100" value="50">
    <span id="rangeValue"></span>
    <div id="responseMessage"></div>

    <script>
        // 获取输入范围元素和显示数值的元素
        const rangeInput = document.getElementById('myRange');
        const rangeValue = document.getElementById('rangeValue');
        const responseMessage = document.getElementById('responseMessage');

        // 监听输入范围变化事件
        rangeInput.addEventListener('input', async function() {
            // 获取当前范围值
            const value = rangeInput.value;
            // 显示当前范围值
            rangeValue.textContent = value;
            // 发送PUT请求
            try {
                const response = await fetch('http://localhost:9080/', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ value: value })
                });

                if (response.ok) {
                    const data = await response.json();
                    responseMessage.textContent = data.message + '，范围值为：' + data.value;
                } else {
                    responseMessage.textContent = 'PUT请求发送失败';
                }
            } catch (error) {
                console.log('PUT请求发送时发生错误:', error);
            }
        });
    </script>
</body>
</html>