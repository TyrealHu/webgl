# webgl学习记录

## 初识WEBGL
代码`./day-one`
### 简介
MDN上对于[WebGL](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)有着详细的介绍

WebGL使得在支持HTML 的canvas 标签的浏览器中，不需要安装任何插件，便可以使用基于OpenGL ES 2.0 的API 在canvas 中进行2D 和3D 渲染。WebGL
程序包括用 JavaScript 写的控制代码，以及在图形处理单元（GPU, Graphics Processing Unit）中执行的着色代码（GLSL，注：GLSL 为OpenGL 
着色语言）。WebGL 元素可以和其他HTML 元素混合使用，并且可以和网页其他部分或者网页背景结合起来。'

## Three.Js
代码`./threejs`
### 简介
在前端高速发展的时代下，网页的表现能力越来越强，对于WebGL的支持也越来越好，但是如果是初学者
来说，如果直接操作WebGL提供的API，是非常繁杂的，而Three.js则是在WebGL上层做了封装，而已
让你专注于渲染的编写～

### start
#### 在开始这章中，介绍了three.js的基础使用，首先要使用上three.js要包括一下三个要素

- 场景，Three.js的渲染是要基于场景的，所以这个是必须要的
- 相机，相机则是用户能看到场景的范围，它包括角度，长宽比，近截面/远截面等等，Three.js中包含许多的相机可以选择
- 渲染器，渲染器可以理解为给Three.js创建canvas的一个过程，并且在这个渲染器里面有一个分辨率的概念，如果渲染器的大小和canvas的大小不一样，那么可以用户自己选择是否需要让渲染器跟随canvas的大小

#### 如果要画出一个几何体，如果操作呢？
- 几何体，这里就是重点了，选择要渲染出来的几何体
- 材料，这个是用来给几何体做装饰的，例如几何体的颜色等等
- 网格，网格则是将几何体以及材料整合起来，然后再将网格放入场景当中

将以上的信息设置好了以后，那么就可以调用渲染器的`render`方法，将场景和网格放入渲染
