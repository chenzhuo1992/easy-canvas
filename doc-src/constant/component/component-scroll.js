export default `
    <article id="滚动容器Scroll">
        <h1>滚动容器组件Scroll</h1>

        <p>Scroll提供了类似css中<strong>overflow: scroll;</strong>的功能。</p>

        <p class="tip">其原理是创建一个容器Sprite，监听touch和wheel（鼠标滚轮）事件，调整内部的元素位置。</p>

        <h2>示例</h2>

        <p>创建组件时，需要用Easycanvas.Scroll来创建一个Sprite。<strong>将style中的overflow设置为scroll可以指定允许滚动，也可以用overflowX和overflowY设置单个方向是否允许滚动</strong>。</p>

        <p>下面是一个没有使用JSX的例子：</p>

        <section>
            <div class="code-2-demo bg-demo"></div>
            <code>
                <head>
                    <script src="./lib/easycanvas/components.standalone.prod.js"></script>
                </head>
                <body>
                    <canvas id="app"></canvas>
                    <p id="eventName">中间的黑色框内的内容可以上下滚动</p>
                </body>

                <script>
                    var $app = new Easycanvas.Painter();
                    $app.register(document.getElementById('app'), {
                        width: 400,
                        height: 400,
                    });
                    $app.start();

                    var $ScrollBox = $app.add(Easycanvas.Scroll({
                        name: 'ScrollBox',
                        style: {
                            left: 50,
                            top: 0,
                            width: $app.width - 100,
                            height: $app.height,
                            locate: 'lt',
                            border: '1 #000',
                            backgroundColor: '#ddd',
                            overflowY: 'scroll',
                            overflowX: 'hidden', // 因为默认值为hidden，可以不设置
                            zIndex: 2
                        },
                    }));

                    var imgSrc = 'https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/G.png';

                    for (var i = 0; i < 10; i++) {
                        $ScrollBox.add({
                            content: {
                                img: imgSrc
                            },
                            style: {
                                left: $app.width / 2 - 50, top: 100 + i * 200,
                                width: 100 + i * 10, height: 100 + i * 10,
                            },
                            events: {
                                click: function () {
                                    this.style.opacity = this.style.opacity === 1 ? 0.5 : 1;
                                },
                            }
                        });
                    }

                    $app.add({
                        content: {
                            img: imgSrc
                        },
                        style: {
                            left: 0, top: $app.height / 2,
                            width: $app.width / 2, height: $app.width / 2,
                            zIndex: 1,
                        },
                    });
                    $app.add({
                        content: {
                            img: imgSrc
                        },
                        style: {
                            left: $app.width, top: $app.height / 2,
                            width: $app.width / 2, height: $app.width / 2,
                            zIndex: 1,
                        },
                        scroll: {
                            smooth: 0.9
                        }
                    });

                    $ScrollBox.scrollTo(0, 500, 300, () => {
                        $ScrollBox.scrollTo(0, 0, 300);
                    });
                </script>
            </code>
        </section>

        <p>Scroll组件拥有如下属性：</p>

        <table>
            <thead>
                <tr>
                    <th align="left">API</th>
                    <th align="left">描述</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="left">scrollX / scrollY <<Number>></td>
                    <td align="left">横、纵向滚动距离，默认0</td>
                </tr>
                <tr>
                    <td align="left">minScrollX / minScrollY <<Number>></td>
                    <td align="left">横、纵向最小滚动距离，默认为0</td>
                </tr>
                <tr>
                    <td align="left">maxScrollX / maxScrollY  <<Number>></td>
                    <td align="left">横、纵向最大滚动距离，默认自适应，一旦赋值将取消自适应</td>
                </tr>
                <tr>
                    <td align="left">flexible / flexibleX / flexibleY <<Boolean>></td>
                    <td align="left">是否开启弹性拉伸效果，默认为false</td>
                </tr>
                <tr>
                    <td align="left">smooth <<Number>></td>
                    <td align="left">速度衰减系数，默认0.8，设置0代表结束滑动后立即停止，1为永不停止</td>
                </tr>
                <tr>
                    <td align="left">capture <<Boolean>></td>
                    <td align="left">捕获内部的事件，默认false，为true时会阻止touchstart、touchmove、wheel等滚动相关事件在内部传递，在移动端可以提升滚动性能（否则事件会传入内部之后再冒泡回来，事件传递的链路长一些），但将导致内部节点不再感知这些事件（因此，多个scroll嵌套时，外层设置capture将阻止内部scroll的使用）</td>
                </tr>
                <tr>
                    <td align="left">onReachBottom  <<Function>></td>
                    <td align="left">监听容器滚动到底部之后触发的回调</td>
                </tr>
            </tbody>
        </table>

        <p>Scroll组件扩展了如下API。例如 Sprite.scrollTo(0, 100, 500) 可以让容器在0.5秒的时间内滚动至垂直方向为100的位置：</p>

        <table>
            <thead>
                <tr>
                    <th align="left">API</th>
                    <th align="left">描述</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="left">scrollTo(left, top, [duration])[.then(callback)]</td>
                    <td align="left">纵向滚动至position位置，耗时duration（默认200毫秒），执行完成后触发callback回调</td>
                </tr>
            </tbody>
        </table>
    </article>
`;
