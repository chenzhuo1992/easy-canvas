// const { View, Image, Text } = Easycanvas.class;
import Easycanvas from '../../src/index.js';
import { View, Image, Text } from '../../src/components.js';

window.View = View;
window.T = Text;

var $app = new Easycanvas.painter();
$app.register(document.getElementById('app'));
$app.start();

//     var $fpsBox = document.getElementsByClassName('fps')[0];
//     $app.fpsHandler = function (fps) {
//         if ($app.$perf && $app.$perf.preprocessTimeSpend) {
//             $fpsBox.innerText = fps + 'fps,' + $app.$perf.preprocessTimeSpend + ',' + $app.$perf.paintTimeSpend;
//         } else {
//             $fpsBox.innerText = fps;
//         }
//     };

Easycanvas.imgLoader('https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/G.png', function (img) {
    let content = {
        img: img
    };

    window.SPRITE_JSX_1 = $app.add(
        <View
            name='root'
            content={content}
            style={{
                width: 40, height: 20,
                cutLeft: 0, cutTop: 0,
                left: Easycanvas.transition.ease(111, 422, 5500).loop(),
                top: 80,
            }}
            events={{
                eIndex: 12,
                mousemove: function (e) {
                    console.log(this, e);
                },
            }}
        >
            <View
                name='c1'
                content={content}
                style={{
                    width: 20, height: 20,
                    cutLeft: 0, cutTop: 0,
                    left: Easycanvas.transition.ease(111, 422, 5500).loop(),
                    top: 80,
                }}
            />
        </View>
    );

    window.SPRITE_JSX_2 = $app.add({
        name: 'root',
        content: {
            img: img,
        },
        style: {
            width: 40, height: 20,
            cutLeft: 0, cutTop: 0,
            left: Easycanvas.transition.ease(111, 422, 6500).loop(),
            top: 160,
            opacity: 0.2,
            rotate: 20,
            locate: 'center',
            zIndex: 1,
        },
        events: {
            eIndex: 2,
            mousemove: function (e) {
                console.log(this, e);
            },
        },
    });

    let top = 100;
    setInterval(() => {
        top++;
    }, 100);

    window.SPRITE_JSX_3 = $app.add(
        <Image
            src='https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/G.png'
            style={{
                left: Easycanvas.transition.ease(111, 222, 3500).loop(),
                top: 240,
                width: 40, height: 20,
                cutLeft: 0, cutTop: 0,
            }}
            events={{
                eIndex: 12,
                mousemove: function (e) {
                    console.log(this, e);
                },
            }}
        >
            <Image
                src='https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/G.png'
                style={{
                    left: Easycanvas.transition.ease(111, 222, 3500).loop(),
                    top: 40,
                    width: 40, height: 20,
                    cutLeft: 0, cutTop: 0,
                }}
                events={{
                    eIndex: 12,
                    mousemove: function (e) {
                        console.log(this, e);
                    },
                }}
            />
            <Text
                text='这里是一段多行文本abcdefg7654321！？：.,?'
                style={{
                    left: Easycanvas.transition.ease(111, 222, 3500).loop(),
                    top: 40,
                    width: 240,
                    color: '#F00',
                    locate: 'lt',
                }}
            />
            <Text
                style={{
                    left: Easycanvas.transition.ease(111, 222, 3500).loop(),
                    top: function () {return this.style.width},
                    width: 240,
                    color: '#F00',
                    locate: 'lt',
                }}
            >
                这里是一段多行文本abcdefg1234567！？：.,?
            </Text>
        </Image>
    );
});

console.log('source');