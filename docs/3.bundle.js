(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{8:function(n,t,e){"use strict";e.r(t);t["default"]='\n    \n    <article id="输入框Input">\n        <h1>输入框Input</h1>\n\n        <p>Text组件是对View组件的简单包装，功能上的区别只是把Sprite的content.text属性提到了最外层，但是语义性更好。</p>\n\n        <h2>示例</h2>\n\n        <p>以下是一个没有用到JSX写法的例子：</p>\n\n        <section>\n            <div class="code-2-demo bg-demo"></div>\n            <code>\n                <body>\n                    <canvas id="app"></canvas>\n                </body>\n\n                <script>\n                    var $app = new Easycanvas.Painter({\n                        el: \'#app\',\n                        width: 400,\n                        height: 400\n                    });\n\n                    var $text = new Easycanvas.Text({\n                        text: \'Foo\',\n                        style: {\n                            left: 150, top: 150,\n                            width: 200, height: 200,\n                            color: \'red\',\n                            backgroundColor: \'orange\',\n                        },\n                    });\n\n                    var i = 0;\n                    var getFromArray = function (arr) {\n                        return arr[i % arr.length];\n                    };\n\n                    setInterval(function () {\n                        $text.text = getFromArray([\'Foo\', \'Bar\', \'Baz\']);\n                        $text.style.textAlign = getFromArray([\'left\', \'center\', \'right\']);\n                        $text.style.textVerticalAlign = getFromArray([\'top\', \'middle\', \'bottom\']);\n                        $text.style.fontSize = getFromArray([\'14px\', \'28px\']);\n                        $text.style.color = getFromArray([\'red\', \'#00FFFF\', \'rgba(255, 255, 0, 0.8)\']);\n                        i++;\n                    }, 1000);\n\n                    $app.add($text);\n                    $app.start();\n                <\/script>\n            </code>\n        </section>\n\n        <h2>API</h2>\n\n        <table>\n            <thead>\n                <tr>\n                    <th align="left">API</th>\n                    <th align="left">描述</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td align="left">text <Function|String|Number></td>\n                    <td align="left">文本内容，与Sprite的contenta.text完全相同</td>\n                </tr>\n            </tbody>\n        </table>\n\n    </article>\n\n    \n    <article id="滚动容器Scroll">\n        <h1>滚动容器组件Scroll</h1>\n\n        <p>Scroll提供了类似css中<strong>overflow: scroll;</strong>的功能。</p>\n\n        <p class="tip">其原理是创建一个容器Sprite，监听touch和wheel（鼠标滚轮）事件，调整内部的元素位置。</p>\n\n        <h2>引入方式</h2>\n\n        <code>\n            \x3c!-- js文件方式引入 --\x3e\n            \x3c!-- 注意放在easycanvas.js后；prod为线上压缩版、dev为开发版；开发版带有调试、警告信息 --\x3e\n\n            <script src="http://your-path/easycanvas.standalone.prod.js"><\/script>\n            <script src="http://your-path/components.standalone.prod.js"><\/script>\n\n            \x3c!-- node环境引入 --\x3e\n\n            import Easycanvas from \'easycanvas\';\n            import EasycanvasComponentScroll from \'easycanvas/build/components.js\';\n\n            // node环境中引入，可以指定组件名称，作为“命名空间”，防止多个组件重复\n            Easycanvas.component(EasycanvasComponentScroll.scroll, \'scroll\');\n        </code>\n\n        <h2>使用</h2>\n\n        <p>创建组件时，需要用Easycanvas.Scroll来创建一个Sprite。<strong>将style中的overflow设置为scroll可以指定允许滚动，也可以用overflowX和overflowY设置单个方向是否允许滚动</strong>，Demo如下：</p>\n\n        <section>\n            <div class="code-2-demo bg-demo"></div>\n            <code>\n                <head>\n                    <script src="./lib/easycanvas/components.standalone.prod.js"><\/script>\n                </head>\n                <body>\n                    <canvas id="app"></canvas>\n                    <p id="eventName">中间的黑色框内的内容可以上下滚动</p>\n                </body>\n\n                <script>\n                    var $app = new Easycanvas.Painter();\n                    $app.register(document.getElementById(\'app\'), {\n                        width: 400,\n                        height: 400,\n                    });\n                    $app.start();\n\n                    var $ScrollBox = $app.add(Easycanvas.Scroll({\n                        name: \'ScrollBox\',\n                        style: {\n                            left: 50,\n                            top: 0,\n                            width: $app.width - 100,\n                            height: $app.height,\n                            locate: \'lt\',\n                            border: \'1 #000\',\n                            backgroundColor: \'#ddd\',\n                            overflowY: \'scroll\',\n                            overflowX: \'hidden\', // 因为默认值为hidden，可以不设置\n                            zIndex: 2\n                        },\n                    }));\n\n                    var imgSrc = \'https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/G.png\';\n\n                    for (var i = 0; i < 10; i++) {\n                        $ScrollBox.add({\n                            content: {\n                                img: imgSrc\n                            },\n                            style: {\n                                left: $app.width / 2 - 50, top: 100 + i * 200,\n                                width: 100 + i * 10, height: 100 + i * 10,\n                            },\n                            events: {\n                                click: function () {\n                                    this.style.opacity = this.style.opacity === 1 ? 0.5 : 1;\n                                },\n                            }\n                        });\n                    }\n\n                    $app.add({\n                        content: {\n                            img: imgSrc\n                        },\n                        style: {\n                            left: 0, top: $app.height / 2,\n                            width: $app.width / 2, height: $app.width / 2,\n                            zIndex: 1,\n                        },\n                    });\n                    $app.add({\n                        content: {\n                            img: imgSrc\n                        },\n                        style: {\n                            left: $app.width, top: $app.height / 2,\n                            width: $app.width / 2, height: $app.width / 2,\n                            zIndex: 1,\n                        },\n                        scroll: {\n                            smooth: 0.9\n                        }\n                    });\n\n                    $ScrollBox.trigger(\'scrollTo\', 0, 500, 300, () => {\n                        $ScrollBox.trigger(\'scrollTo\', 0, 0, 300);\n                    });\n                <\/script>\n            </code>\n        </section>\n\n        <p>Scroll组件拥有如下属性：</p>\n\n        <table>\n            <thead>\n                <tr>\n                    <th align="left">API</th>\n                    <th align="left">描述</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td align="left">scrollX / scrollY</td>\n                    <td align="left">横、纵向滚动距离</td>\n                </tr>\n                <tr>\n                    <td align="left">minScrollX / minScrollY</td>\n                    <td align="left">横、纵向最小滚动距离，默认为0</td>\n                </tr>\n                <tr>\n                    <td align="left">maxScrollX / maxScrollY</td>\n                    <td align="left">横、纵向最大滚动距离，默认自适应，一旦赋值将取消自适应</td>\n                </tr>\n                <tr>\n                    <td align="left">flexible / flexibleX / flexibleY</td>\n                    <td align="left">是否开启弹性拉伸效果，默认为false</td>\n                </tr>\n                <tr>\n                    <td align="left">smooth</td>\n                    <td align="left">速度衰减系数，默认0.8，设置0代表结束滑动后立即停止，1为永不停止</td>\n                </tr>\n                <tr>\n                    <td align="left">capture</td>\n                    <td align="left">捕获内部的事件，默认false，为true时会阻止touchstart、touchmove、wheel等滚动相关事件在内部传递，在移动端可以提升滚动性能（否则事件会传入内部之后再冒泡回来，事件传递的链路长一些），但将导致内部节点不再感知这些事件（因此，多个scroll嵌套时，外层设置capture将阻止内部scroll的使用）</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <p>Scroll组件扩展了如下API。例如 Sprite.scrollTo(0, 100, 500) 可以让容器在0.5秒的时间内滚动至100的位置：</p>\n\n        <table>\n            <thead>\n                <tr>\n                    <th align="left">API</th>\n                    <th align="left">描述</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td align="left">scrollTo(left, top, [duration])[.then(callback)]</td>\n                    <td align="left">纵向滚动至position位置，耗时duration（默认200毫秒），执行完成后触发callback回调</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <p>Scroll组件也提供了一些事件，例如可以用 Sprite.on(\'reachBottom\', callback) 监听容器滚动到底部。</p>\n    </article>\n\n    \n    <article id="帧动画Sequence">\n        <h1>帧动画组件Sequence</h1>\n\n        <p>“帧动画”也称为“序列动画”、“精灵动画”等，是指把一个元素在各个帧的状态的画面归到一组依次绘制，形成动画。例如下面是一个爆炸的动作序列图：</p>\n\n        <img class="article-img" width="100%" src="https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/Fire.png"></img>\n\n        <h2>示例</h2>\n\n        <p>以上图为例：</p>\n\n        <section>\n            <div class="code-2-demo bg-demo"></div>\n            <code>\n                <head>\n                    <script src="./lib/easycanvas/components.standalone.prod.js"><\/script>\n                </head>\n                <body>\n                    <canvas id="app"></canvas>\n                    <p id="content">点击画布可以看到爆炸效果（爆炸图加载中，请稍等）</p>\n                </body>\n\n                <script>\n                    var Fire = Easycanvas.ImgLoader(\'https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/Fire.png\', function () {\n                        document.getElementById(\'content\').innerText = \'点击画布可以看到爆炸效果\';\n                    });\n\n                    var $app = new Easycanvas.Painter();\n                    $app.register(document.getElementById(\'app\'), {\n                        events: {\n                            click: function (e) {\n                                var fireConfig = createFire(e.canvasX, e.canvasY);\n                                $app.add(fireConfig);\n                            }\n                        }\n                    });\n\n                    var Fire = Easycanvas.ImgLoader(\'https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/Fire.png\');\n\n                    var createFire = function (initX, initY) {\n                        return Easycanvas.Sequence({\n                            src: Fire,\n                            frameWidth: -9,\n                            frameHeight: -1,\n                            interval: 50,\n                            loop: false,\n                            style: {\n                                left: initX,\n                                top: initY,\n                                width: 120,\n                                height: 120,\n                            },\n                        });\n                    };\n\n                    $app.start();\n                <\/script>\n            </code>\n        </section>\n\n        <p><strong>frameWidth和frameHeight代表图片中每帧读取宽和高，正数代表每帧的像素尺寸，负数代表将序列图进行等分处理并将结果作为每帧尺寸</strong>。例如上例的图片宽度为2907，包含9张子画片，传入-9代表代表每帧的宽度为2907的1/9。这里h为-1代表序列是单行的（多行序列图在播放时会自动换行处理）。这样设计是考虑到了大部分精灵动画所需的设计图的尺寸都是每帧尺寸和帧数的乘积，可以省去一些计算。如果将frameWidth改成2907/9，得到的是相同的效果。</p>\n\n        <p>props中的loop代表这个动画是否是循环播放的，默认为true。如果false，那么将在轮播到最后一张图之后，自动移除当前的Sprite（会触发beforeRemove和removed钩子）。</p>\n\n        <p class="tip">Tips：这个例子中，一开始就加载了fire.png图片，而不是等到点击的时候再去加载，这样可以保证体验更加流畅。如果以字符串的形式定义var fire = \'fire.png\'，那么加载是在首次渲染到这张图片时进行的。</p>\n\n        <h2>自定义尺寸</h2>\n\n        <p>如果我们想自定义播放精灵动画，可以不传入frameWidth和frameHeight，而是自定义cutLeft、cutTop、cutWidth和cutHeight：</p>\n\n        <section>\n            <div class="code-2-demo bg-demo"></div>\n            <code>\n                <head>\n                    <script src="./lib/easycanvas/components.standalone.prod.js"><\/script>\n                </head>\n                <body>\n                    <canvas id="app"></canvas>\n                </body>\n\n                <script>\n                    var $app = new Easycanvas.Painter({\n                        el: \'#app\',\n                        width: 400,\n                        height: 400\n                    });\n\n                    var img = \'https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/human.png\';\n                    var width = 166, height = 103;\n\n                    var $human = Easycanvas.Sequence({\n                        src: img,\n                        interval: 40,\n                        loop: true,\n                        style: {\n                            left: 150,\n                            top: 150,\n                            cutWidth: width,\n                            cutHeight: height,\n                            cutLeft: function () {\n                                return this.props.index % 6 * width;\n                            },\n                            cutTop: function () {\n                                return height * (this.props.index % 20 >= 10 ? 2 : 6);\n                            },\n                        },\n                    });\n                    $app.add($human);\n                    $app.start();\n                <\/script>\n            </code>\n        </section>\n\n        <p>这里用到的<strong>sequence的index参数是序列索引，代表当前播放到了精灵动画的第几帧子画面</strong>。例如这个例子中的interval为40，那么index的值会每40毫秒自增1。</p>\n\n        <p class="tip">Tips：当然，也可以通过状态钩子来实现同样的效果，将cutLeft和cutHeight的值通过绘制钩子“ticked”或者”beforeTick“动态计算出来。或者，封装自己的组件来实现更多参数可配置的精灵动画。</p>\n\n        <h2>API</h2>\n\n        <table>\n            <thead>\n                <tr>\n                    <th align="left">API</th>\n                    <th align="left">描述</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td align="left">src <String/Image/Canvas></td>\n                    <td align="left">绘图内容</td>\n                </tr>\n                <tr>\n                    <td align="left">loop <Boolean></td>\n                    <td align="left">播放结束后是否循环开始，默认false；为false时，播放完最后一帧后会自动调用remove方法</td>\n                </tr>\n                <tr>\n                    <td align="left">frameWidth / frameHeight <Number></td>\n                    <td align="left">每帧尺寸，如设置，将用于自动计算cutLeft和cutTop；如为负数，代表将图像N等分，例如-5表示每行（或每列）含有5帧，会自动计算出cutWidth和cutHeight</td>\n                </tr>\n                <tr>\n                    <td align="left">index <Number></td>\n                    <td align="left">初始化时为起始帧数，默认0，之后随着帧动画的播放会自动变化</td>\n                </tr>\n            </tbody>\n        </table>\n\n    </article>\n\n    \n    <article id="单行文本Text">\n        <h1>单行文本Text</h1>\n\n        <p>Text组件是对View组件的简单包装，功能上的区别只是把Sprite的content.text属性提到了最外层，但是语义性更好。</p>\n\n        <h2>示例</h2>\n\n        <p>以下是一个没有用到JSX写法的例子：</p>\n\n        <section>\n            <div class="code-2-demo bg-demo"></div>\n            <code>\n                <body>\n                    <canvas id="app"></canvas>\n                </body>\n\n                <script>\n                    var $app = new Easycanvas.Painter({\n                        el: \'#app\',\n                        width: 400,\n                        height: 400\n                    });\n\n                    var $text = new Easycanvas.Text({\n                        text: \'Foo\',\n                        style: {\n                            left: 150, top: 150,\n                            width: 200, height: 200,\n                            color: \'red\',\n                            backgroundColor: \'orange\',\n                        },\n                    });\n\n                    var i = 0;\n                    var getFromArray = function (arr) {\n                        return arr[i % arr.length];\n                    };\n\n                    setInterval(function () {\n                        $text.text = getFromArray([\'Foo\', \'Bar\', \'Baz\']);\n                        $text.style.textAlign = getFromArray([\'left\', \'center\', \'right\']);\n                        $text.style.textVerticalAlign = getFromArray([\'top\', \'middle\', \'bottom\']);\n                        $text.style.fontSize = getFromArray([\'14px\', \'28px\']);\n                        $text.style.color = getFromArray([\'red\', \'#00FFFF\', \'rgba(255, 255, 0, 0.8)\']);\n                        i++;\n                    }, 1000);\n\n                    $app.add($text);\n                    $app.start();\n                <\/script>\n            </code>\n        </section>\n\n        <h2>API</h2>\n\n        <table>\n            <thead>\n                <tr>\n                    <th align="left">API</th>\n                    <th align="left">描述</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td align="left">text <Function|String|Number></td>\n                    <td align="left">文本内容，与Sprite的contenta.text完全相同</td>\n                </tr>\n            </tbody>\n        </table>\n\n    </article>\n\n    \n    <article id="容器组件View">\n        <h1>容器组件View</h1>\n\n        <p>View组件和Sprite基类完全相同，但是语义性更好，用来声明这是一个容器。</p>\n\n        <h2>示例</h2>\n\n        <section>\n            <div class="code-2-demo code-2-demo-jsx bg-demo"></div>\n            <code>\n                import { Painter, View, Text } from \'easycanvas\';\n\n                const $app = new Painter({\n                    el: "#app",\n                    width: 400,\n                    height: 400\n                }).start();\n\n                $app.add(\n                    <View>\n                        <Text\n                            style={{\n                                left: 100,\n                                top: 100,\n                                width: 100,\n                                height: 30,\n                                fontSize: 30,\n                                color: \'#F00\',\n                                locate: \'lt\',\n                            }}\n                        >Easycanvas</Text>\n                    </View>\n                )\n            </code>\n        </section>\n\n        <h2>API</h2>\n\n        <p>View组件的API与Easycanvas.Sprite基类完全相同，请参考Sprite API部分。</p>\n\n    </article>\n\n    \n    <article id="开始使用组件">\n        <h1>开始使用组件</h1>\n\n        <p>接下来的所有组件都是基于<strong>Sprite</strong>类的封装和组合。因此，组件通常也可以使用Sprite所提供的API。</p>\n\n        <p>相比于JS的写法，更<strong>推荐使用JSX的形式来组织组件，这样可以使代码的可读性大大提高</strong>。如果要使用JSX，请确保引入了Easycanvas提供的loader，详情请参考左侧“快速开始”中的“npm引入与JSX写法”。</p>\n\n        <p>下面所有的组件都支持使用JSX，但例子可能有部分非JSX的写法，只是用于示范。</p>\n\n        <h2>引入方式</h2>\n\n        <code>\n            \x3c!-- 浏览器引入 --\x3e\n            \x3c!-- 注意放在easycanvas.js后；prod为线上压缩版、dev为开发版；开发版带有调试、警告信息 --\x3e\n\n            <script src="http://your-path/easycanvas.standalone.prod.js"><\/script>\n            <script src="http://your-path/components.standalone.prod.js"><\/script>\n            <script>\n                var view1 = new Easycanvas.View({/* your config */});\n            <\/script>\n\n            \x3c!-- node环境引入 --\x3e\n            \x3c!-- 注意Easycanvas是必须引入的，创建View的时候会隐式调用，原理与React相同 --\x3e\n            import Easycanvas, { View } from \'easycanvas\';\n            var view1 = <View yourConfig="value" />\n        </code>\n\n        <p>浏览器引入时，需要的js文件可以在<a href="https://github.com/c-zhuo/easycanvas/tree/master/build" target="_blank">这里</a>找到。</p>\n\n        <p>node环境下，打包时会根据<strong>process.env.NODE_ENV</strong>这个环境变量来选择版本。当它不为<strong>production</strong>的时候，都会使用开发版本。开发版本包含一些warning信息，并且可以使用Chrome调试插件在运行时进行调试工作。</p>\n\n    </article>\n\n'}}]);