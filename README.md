# Nx-components

NX official website components by Vue.

### UseAge

#### 按需引入

```
npm install -D babel-plugin-import
```

babel.config.js

```
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "Nx-Component",
        libraryDirectory: "lib",
        styleLibraryDirectory: "lib/theme-chalk",
        camel2DashComponentName: false,
      }
    ]
  ]
}

```

或者：

```
npm install babel-plugin-component -D
```

```

module.exports = {
  plugins:[
    [
    "component",
      {
        libraryName: "nx-component",
        styleLibrary: {
          name:"theme-chalk",
          base:false
        },
        camel2Dash:false
      }
    ]
  ]
}

```

#### 响应式配置

- public/index.html

```
const baseSize = 32 // 基准值
function setRem() {
	// 相对于750像素，获得一个缩放比例
	const scale = document.documentElement.clientWidth / 750
	document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
setRem()
window.onresize = function() {
	setRem()
}
```

#### Vue Cli 3+

> babel-plugin-import 需要配置修改 webpackextensions 配置，否则会无法读取 css 文件后缀。

```
module.exports = {
    configureWebpack: {
      resolve: {
      extensions: ['.js', '.vue', '.css', '.json']
    }
  }
}
```

---

### Development

### Eslint in Vscode

###### install

- EsLint
- vetur
- Prettier - Code formatter

###### VSCode config

```
{
    "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": true
    },
    "editor.fontSize": 12,
    "editor.wordWrap": "on",
    "editor.formatOnSave": false,
    "emmet.syntaxProfiles": {
        "javascript": "jsx",
        "vue": "html",
        "vue-html": "html"
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.tslint": true,
        "source.fixAll.eslint": true
    },
    "eslint.run": "onSave",
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue-html",
        "vue"
    ],
    "eslint.options": {
        // "plugins": ["html"],
        "extensions": [".js", ".vue"]
    },
    "editor.tabSize": 2,
    "files.autoSave": "off",
}
```

> 引入依赖可能会出现 ESlint 报错，暂时替代方法项目关闭 eslint or 重新启动。

1. NxBg

> 背景图响应式容器

##### 代码演示

- footerList: Array: 底部可点击 list。
- webBg: String: Pc 下的背景图。
- padBg: String: pad 下的背景图。
- phoneBg: String: phone 下的背景图。
- copyRight: String: 底部 copyRight。

* 默认 slot: 接受的插槽(注意是作用域，暴露应该设置的宽度和高度)。

> 具体参见 Hunter 官网。

```

<template>
  <div class="home">
    <nx-bg
    :webBg="require('../assets/image/hunter_web.jpg')"
    :padBg="require('../assets/image/hunter_pad.jpg')"
    :phoneBg="require('../assets/image/hunter_phone.jpg')"
    :footerList="footerList"
    :copyRight="copyRight"
    @triggerClick="triggerClick"
    >

    <template #default='slotProp'>

      <div :style="{...slotProp.info}">
         <img  class="image" src="~@/assets/image/Appstore-min.png">
      </div>

    </template>


    </nx-bg>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      copyRight:"© 2020 Lemonade",
      footerList:[
        {
          text:'Privacy',
          pathName:'Parvacy'
        },
        {
          text:'. Terms',
          pathName:'terms'
        },
        {
          text:'. Support',
          email:'steve.zhang.1113@gmail.com'
        }
      ]
    }
  },
  methods:{
    triggerClick(item) {
      this.$router.push({
        name:item.pathName
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .home {
    height: 100%;
    .image {
      height: 100%;
      width:100%;
      &:hover {
        transform: scale(1.02);
      }
    }
  }
</style>

```

2. 重构 nx-bg

> 一个组件只做一件事情，之前bg揉了太多琐碎逻辑,现在单独全部抽出来。

- phoneVertical

> 横屏手机图

- phoneHorizaontal

> 竖屏手机背景图

- pc

> Pc 端背景图

- pad

> pad 端图片

###### 调用Demo

```
<template>
  <div class="home">
    <nx-bg
      :pc="require('../assets/pc.png')"
      :phoneVertical="require('../assets/pad.png')"
      :phoneHorizaontal="require('../assets/phone.jpg')"
    />
    <!--
      pc="require('../assets/pc.png')"

     -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
<style>
  .home {
    height: 100%;
  }
</style>
```

###### 遗留问题

+ addEventScreen方法中，执行addListener监听后。切换横竖会触发多次事件。有时间了修复。
