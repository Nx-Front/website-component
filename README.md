# Nx-components

NX official website components by Vue.

### UseAge

#### install

`npm install nx-website-component --save`

`yarn add nx-website-component`

> version 1.x 仅支持 Vue2.x，暂不兼容 Vue3.0 版本。

---

#### 直接引入

```
import webSite from "nx-website-component'
import 'nx-website-component/lib/theme-chalk'

Vue.use(webSite)
```



#### 按需引入

```
npm install -D babel-plugin-component
```

babel.config.js

```
plugins:[
    [
    "component",
      {
        libraryName: "nx-website-component",
        styleLibrary: {
          name:"theme-chalk",
          base:false
        },
        camel2Dash:false
      }
    ]
  ]
```

> .babelrc

```
import { NxCard } from "nx-website-component"
Vue.use(NxCard)
```

> main.js


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

##### 引入源码版本(兼容低版本 IE)

> 当低版本浏览器下使用插件报错的情况需要额外跟随项目中的 babel 进行转译。

当使用 Vue CLI 3+ 时，需要在 vue.config.js 中的 transpileDependencies 增加 nx-website-component，如下：

```
module.exports = {
  transpileDependencies:[
    'nx-website-component'
  ]
}
```

> 兼容低版本浏览器配置处理。

---

## 1.NxBg(重构)

### props && event

#### props

> 一个组件只做一件事情，之前 bg 揉了太多琐碎逻辑,现在单独全部抽出来。

- phoneVertical

> 横屏手机图

- phoneHorizaontal

> 竖屏手机背景图

- pc

> Pc 端背景图

- pad

> pad 端图片

###### 调用 Demo

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

- addEventScreen 方法中，执行 addListener 监听后。切换横竖会触发多次事件。有时间了修复。

## 2. NxCard(重构)

### Props && Event

#### Props

###### data

- title

  > 顶部文字内容。

- body

  > 底部文字内容。

- svg

  > 需要 svg 的图片(iconfont)。

- icon
  > 字体(iconfont)。(如果存在 icon 属性则会忽略 svg 属性)

###### phoneVerticalHeight，phoneHorizaontalHeight

> 横向手机 card 高度，默认大小，可手动定义。
> 竖向手机 card 高度，默认大小，可手动定义。

###### pcHeight,padHeight

> Pc card 高度,Pad card 高度

###### phoneVerticalWidth,phoneHorizaontalWidth

> 手机横竖屏宽度。

###### pcWidth,padWidth

> pad 宽度。

###### phoneVertIconSize，phoneHoriIconSize

> 手机横竖屏幕 icon 大小。仅仅影响 icon 不影响 svg。

###### padIconSIze,pcIconSize

> pad，pc 图标大小。仅仅影响 icon 不影响 svg。

###### titleFontBg，bodyFontBg

> 标题文字渐变色，body 文字渐变色。

#### Event

- click(data)

> 点击卡片触发 click 事件，接受参数为传入的 data。
> 如果存在 data.link，那么会进行下载 link。

### 代码演示

```

data: {
            type: Object,
            default: () => {}
        },
        /* 以下props抽空整理出来成为Object */
        phoneVerticalHeight: {
            type: String,
            default: ''
        },
        phoneHorizaontalHeight: {
            type: String,
            default: ''
        },
        pcHeight: {
            type: String,
            default: ''
        },
        padHeight: {
            type: String,
            default: ''
        },
        phoneVerticalWidth: {
            type: String,
            default: ''
        },
        phoneHorizaontalWidth: {
            type: String,
            default: ''
        },
        pcWidth: {
            type: String,
            default: ''
        },
        padWidth: {
            type: String,
            default: ''
        },
        /* icon大小 */
        phoneVertIconSize: {
            type: String,
            default: ''
        },
        phoneHoriIconSize: {
            type: String,
            default: ''
        },
        pcIconSize: {
            type: String,
            default: ''
        },
        padIconSIze: {
            type: String,
            default: ''
        },
        /* title字体颜色 */
        titleFontBg: {
            type: String,
            default: 'to top, #dfe9f3 0%, white 100%'
        },
        bodyFontBg: {
            type: String,
            default: 'to right, #00dbde 0%, #fc00ff 100%'
}


```

## 3. NxFooter

### Props & Event

#### Props

##### copyRight

> 底部 copyright，string。

##### data

> 底部 data.

- text 内容

- path 跳转页面路由。(存在该属性，点击直接跳转)

- email 存在该属性点击直接吊起邮箱。

##### Event

- click 事件，向上触发为点击底部元素。

## 4. NxArt

> 提供 slot 直接包裹即可。等待重构。

---

# Old Component

> 跑在就项目中的 component。

1. NxBg

> 背景图响应式容器

#### props & event

#### props

- footerList: Array: 底部可点击 list。
- webBg: String: Pc 下的背景图。
- padBg: String: pad 下的背景图。
- phoneBg: String: phone 下的背景图。
- copyRight: String: 底部 copyRight。

> 具体参见 Hunter 官网。

##### 代码演示

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
