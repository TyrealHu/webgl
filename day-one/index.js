document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#canvas')

    const webgl = canvas.getContext('webgl')

    // 使用完全不透明的黑色清除所有图像
    webgl.clearColor(0.0, 0.0, 0.0, 1.0)
    // 用上面指定的颜色清除缓冲区
    webgl.clear(webgl.COLOR_BUFFER_BIT)
})
