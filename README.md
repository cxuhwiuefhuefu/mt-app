# mt-app
vue仿美团PC端




- 首页
- 切换城市
- 搜索列表页面
- 登录页面
- 注册页面



---
观察这个功能是不是我自己完成的 如果你完成不了 需要谁配合你 搜索框数据需要后端去配合 需要后端给我个借口获取到数据 这个时候需要整理一份接口文档了 需要后端提供给我的数据有哪些
后端拿到这个文档之后会先观察一下文档合理不 数据结构合理不 如果他觉得合理了才开始开发 如果觉得不合理会找你协商如何返回这个数据格式才更好 接口文档是我作为前端来完成的工作 请求参数是后端给我添加进去的 并不是前端来写的
设计接口文档(一般前端来做设计这个需求分析 有时候后端来拿来分析再优化)
接口文档



axois类似ajax请求



我们用vue-cli2.9多版本的 这个版本构建出来的项目 它把项目所有的项目结构都给你展示出来 
3.0多版本会隐藏一些文件 会隐藏webpack一些配置文件 而且一些配置需要你自己去配置的



vue init webpack mt-app

devDependencies： 开发环境的一些依赖
dependencies: 生产环境需要用到的依赖 马上上线的环境

package-lock.json是对package-json的一些详细说明
index.html: 最终渲染的页面
.postcssrc.js 对CSS预处理的配置文件
.gitignore 就是如果我们开发完你想传到github上面去 我们会忽略的一些文件
.eslintrc.js 代码规范的配置文件 它默认识别的代码规范是JS还有html 如果当前写vue需要用到vue的插件 如果它查出你这个代码不规范的话会给你提示错误的 如果你不想让它给你提示错误 你想让它给你自动规范化 可以下载这个插件 eslint-vuefix-plugin 可以去eslint官网下载  如果你js代码也不规范 如果你也想让它给你规范化 可以在package.json里面 "lint": "eslint --fix --ext .js,.vue src",  (--fix)这样不会出现警告
.eslintignore 除了哪些文件需要规范
.editofig eslint的一些代码配置
.babelrc为了识别ES6代码 还有配置的一些环境
build就是构建的一些配置
webpack.base.conf.js 就是我开发环境和生产环境也用到这个配置文件 公共的配置文件
webpack.dev.conf.js(生产环境配置)和webpack.prod.conf.js区别是否压缩 module就是模块的规则  devtool就是配置的一些工具 devServer配置的服务器的代理 哪个不符合你要求去webpack官网修改这个文件



- 首页(上中下的结构)  切换城市(上中下的结构)  搜索列表
导航条
内容展示区 产品的区域
底部的信息栏

有公共的结构 把公共的结构提出来 单独写一个页面




模块化 组件化
头部 导航的区域 搜索的区域
index.vue 输出的模块

如果标签里面没有内容就采用闭合标签的形式 如果你写双标签人家会以为你在里面写内容了

我们用的是vue2.9版本 并没有识别scss的配置的 去webpack.base.conf.js里面配置 需要用到他们就要下载他们 cnpm install style-oader css-loader sass-loader node-sass -D


登录这个页面如果登录了应该展示用户名

怎么判断移动上去显示不同的效果 用不同的类名


ul li 和 dl dd 区别识dl下面还有dt(标题)





---
默认模板实现

去掉el-header el-footer默认的样式

@去webpack.base.conf.js里面有配置的

输入关键字的时候应该展示相应的内容 鼠标移动进去的时候应该给我一个提示框 就是热文搜索的提示框

鼠标输入的时候弹出下拉列表

鼠标移动上去而且还没有值得时候就展示热门搜索


怎么修复警告
package.json 添加--fix
 "lint": "eslint --fix --ext .js,.vue src",
如何npm run lint   --fix默认给你修复js文件的
如果你想让它修复vue文件 去eslintrc.js文件写plugins: [
    'vuefix'
  ],  然后 npm install eslint-plugin-vuefix 然后npm run lint



输入框方法有问题
