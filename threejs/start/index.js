/**
 * 建立场景
 * */
const scene = new THREE.Scene()


/**
 * 建立相机
 *
 * 选取PerspectiveCamera相机
 *
 * 第一个参数是视野角度（FOV）。视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。
 *
 * 第二个参数是长宽比（aspect ratio）。 也就是你用一个物体的宽除以它的高的值。比如说，当你在一个宽屏电视上播放老电影时，可以看到图像仿佛是被压扁的。
 *
 * 接下来的两个参数是近截面（near）和远截面（far）。 当物体某些部分比摄像机的远截面远或者比近截面近的时候，该这些部分将不会被渲染到场景中。或许现在你不用担心这个值的影响，但未来为了获得更好的渲染性能，你将可以在你的应用程序里去设置它。
 * */
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)


/**
 * 建立渲染器
 *
 * 除了我们在这里用到的WebGLRenderer渲染器之外，Three.js同时提供了其他几种渲染器，当用户所使用的浏览器过于老旧，或者由于其他原因不支持WebGL时，可以使用这几种渲染器进行降级。
 *
 *
 * 再设置渲染器的大小尺寸，这个是渲染的尺寸，而canvas有自己的尺寸，支持设置第三个参数updateStyle，如果设置为false，那么如果canvas的尺寸比渲染的尺寸要大时，会采取降低分辨率的方式来适应canvas的大小。
 *
 * 然后将渲染器放在document上
 * */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


/**
 * 绘制简单的立方体
 *
 * BoxGeometry是立方体对象，包含立方体所有的顶点和面
 *
 * MeshBasicMaterial是一种让立方体有颜色的材质，这里设置color属性
 *
 * Mesh，网格，包含一个几何体，以及所有作用到几何体上面的材质，可以将其放在场景中，并且可以所以移动
 *
 * */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5


/**
 * 建立好场景，网格，摄像机以及渲染器后，调用requestAnimationFrame来渲染结果。
 *
 * 为何不用setInterval，而是requestAnimationFrame？
 *
 * 官方给出的答案是，当用户切换到其它的标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。
 *
 * */
function animate() {
    requestAnimationFrame(animate);
    /**
     * 将网格转动起来
     * */
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();
