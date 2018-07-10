<template>
    <main>
        <p class="title-tip margin-t-0">Vuex--Store 项目结构的搭建</p>
        <div class="x-font-container">使用Vuex 并不强制性的要求该如何定义Store 或者如何使用Module,正因此灵活性而显得比较好。但是谁都愿意去看结构清晰、代码分层明了已维护的代码~  当然如果对一小型的项目甚至可以不使用到Vuex时则不用考虑。大型的项目就有必要做一些规范性布局了：</div>
        <pre>
            <div>按照官方的标准目录结构的组织，本实例都请按照如下标准构建：</div>
            <code>
                └── store
                    ├── index.js          # 我们组装模块并导出 store 的地方
                    ├── actions.js        # 根级别的 action
                    ├── mutations.js      # 根级别的 mutation
                    ├── getters.js        # 根级别的 getters
                    └── modules
                        ├── cart.js       # 购物车模块
                        └── products.js   # 产品模块
            </code>
        </pre>
        <strong>项目截图示例：</strong>
        <div>
            <img src="../../assets/store.png">
        </div>
    </main>
</template>
<style scoped>
    img{
        width: 100%;
        max-width: 800px;
    }
</style>

