# Nx-components

NX official website components by Vue.

### Use

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

#### Vue Cli 3+

> babel-plugin-import需要配置修改webpackextensions配置，否则会无法读取css文件后缀。
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

> 引入依赖可能会出现ESlint报错，暂时替代方法项目关闭eslint or 重新启动。
