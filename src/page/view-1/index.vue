<template>
    <main>
        <div>
            <p class="title-tip margin-t-0">Vuex 的开始安装使用</p>
            <div>&emsp;&emsp;直接在页面使用script 标签引入，官方提供了CDN 连接，指向最新发布的版本</div>
            <pre>
                直接下载使用：
                &emsp;&emsp;<a href="https://unpkg.com/vuex" target="_black">https://unpkg.com/vuex</a>

                当前页面同时也需要引入必要的依赖JS库：
                &emsp;&emsp;&lt;script src=&quot;vue.js&quot;&gt;&lt;/script&gt;
                &emsp;&emsp;&lt;script src=&quot;vuex.js&quot;&gt;&lt;/script&gt;
            </pre>

            <div>&emsp;&emsp;当然我们推荐使用npm 的方式在安装依赖，也是大多数的选择</div>
            <pre>
                npm install vuex --save

                在模块化打包系统中，vuex 必须是通过vue.user()的方式安装vuex 插件
                import Vue from 'vue'
                import Vuex from 'vuex'

                Vue.use(Vuex)
            </pre>

            <strong>
                <p> &emsp;&emsp;注意！vuex 是基于pormise环境下运行，不然其实在任何模块化项目系统中 多多少少会使用Promise 或者基于Promise环境运行的插件。有些浏览器内核比较低，非常有爱心就不支持Prommise。比如搜狗浏览器、IE就不支持。</p>
                <p> &emsp;&emsp;解决方案：项目安装polyfill 或者 es6-promise。</p>
                <p style="color:red"> &emsp;&emsp;本实例使用babel-polyfill。当然我们推荐安装babel-polyfill 或者 polyfill了，这样我们就不用考虑大部分浏览器对ES6的支持的问题。</p>
            </strong>
            <pre>
                CDN：
                &lt;script src=&quot;es6-promise.auto.js&quot;&gt;&lt;/script&gt;
                
                NPM:
                import 'babel-polyfill'
            </pre>
        </div>
    </main>
</template>
