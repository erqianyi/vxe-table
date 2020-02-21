# vxe-table

[![gitee star](https://gitee.com/xuliangzhan_admin/vxe-table/badge/star.svg?theme=dark)](https://gitee.com/xuliangzhan_admin/vxe-table/stargazers)
[![npm version](https://img.shields.io/npm/v/vxe-table.svg?style=flat-square)](https://www.npmjs.org/package/vxe-table)
[![npm build](https://travis-ci.org/xuliangzhan/vxe-table.svg?branch=master)](https://travis-ci.org/xuliangzhan/vxe-table)
[![npm downloads](https://img.shields.io/npm/dm/vxe-table.svg?style=flat-square)](https://npm-stat.com/charts.html?package=vxe-table)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/index.min.js?compression=gzip&label=gzip%20size:%20JS)](https://unpkg.com/vxe-table/lib/index.min.js)
[![gzip size: CSS](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/index.css?compression=gzip&label=gzip%20size:%20CSS&color=green)](https://unpkg.com/vxe-table/lib/index.css)  
[![issues](https://img.shields.io/github/issues/xuliangzhan/vxe-table.svg)](https://github.com/xuliangzhan/vxe-table/issues)
[![issues closed](https://img.shields.io/github/issues-closed/xuliangzhan/vxe-table.svg)](https://github.com/xuliangzhan/vxe-table/issues?q=is%3Aissue+is%3Aclosed)
[![pull requests](https://img.shields.io/github/issues-pr/xuliangzhan/vxe-table.svg)](https://github.com/xuliangzhan/vxe-table/pulls)
[![pull requests closed](https://img.shields.io/github/issues-pr-closed/xuliangzhan/vxe-table.svg)](https://github.com/xuliangzhan/vxe-table/pulls?q=is%3Apr+is%3Aclosed)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xuliangzhan/vxe-table/blob/master/LICENSE)

一个基于 [vue](https://www.npmjs.com/package/vue) 的表格组件，支持增删改查、虚拟滚动、懒加载、快捷菜单、数据校验、树形结构、打印导出、表单渲染、数据分页、模态窗口、自定义模板、贼灵活的配置项、丰富的扩展插件等...  

* 设计理念
  * 面向现代浏览器，高效的简洁 API 设计
  * 模块化表格、按需加载、插件化扩展
  * 为单行编辑表格而设计，支持增删改查及更多扩展，强大的扩展接口的同时兼具性能  

* 计划
  * [x] v1.0 100% 实现表格的一切实用的功能
  * [x] v2.0 &nbsp;100% 性能优化，同时兼具功能与性能
  * [x] v3.0 &nbsp;&nbsp;50% 内部重构，不再支持 IE，渲染性能提升
  * [ ] v4.0 &nbsp;&nbsp;0% 基于 Vue3 重构，渲染性能提升

🐬 如果有更好的建议、优化点或 Bug 都欢迎提 [Issues](https://github.com/xuliangzhan/vxe-table/issues/390)

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
11+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Features

* [x] Basic table （基础表格）
* [x] Grid （高级表格）
* [x] Size （尺寸）
* [x] Striped （斑马线条纹）
* [x] Table with border （带边框）
* [x] Cell style （单元格样式）
* [x] Column resizable （列宽拖动）
* [x] Maximum table height （最大高度）
* [x] Resize height and width （响应式宽高）
* [x] Fixed column （固定列）
* [x] Grouping table head （表头分组）
* [x] Highlight row and column （高亮行、列)
* [x] Table sequence （序号)
* [x] Radio （单选)
* [x] Checkbox （多选）
* [x] Sorting （排序）
* [x] Filter （筛选）
* [x] Rowspan and colspan （合并行或列）
* [x] Footer summary （表尾合计）
* [x] Import （导入)
* [x] Export （导出)
* [x] Print （打印)
* [x] Show/Hide column （显示/隐藏列）
* [x] Loading （加载中）
* [x] Formatted content （格式化内容）
* [x] Custom template （自定义模板）
* [x] Context menu（快捷菜单）
* [x] Virtual Scroller（虚拟滚动）
* [x] Expandable row （展开行）
* [x] Pager（分页）
* [x] Form（表单）
* [x] Toolbar（工具栏）
* [x] Tree table （树形表格)
* [x] Editable CRUD（增删改查)
* [x] Validate（数据校验）
* [x] Data Proxy（数据代理）
* [x] Keyboard navigation（键盘导航）
* [x] Modal window（模态窗口）
* [x] Charts（图表工具）

## Modules

* Core（核心）
  * ![Table](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/table/src/table.min.js?compression=gzip&label=Table)![Body](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/body/src/body.min.js?compression=gzip&label=Body)![Cell](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/cell/src/cell.min.js?compression=gzip&label=Cell)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/table/style/style.css?compression=gzip&label=style&color=green) (表格)
* Modules （内置模块）
  * ![Icon](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/icon/style/style.css?compression=gzip&label=Icon&color=green) （图标）
  * ![Header](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/header/src/header.min.js?compression=gzip&label=Header)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/header/style/style.css?compression=gzip&label=style&color=green) （表头）
  * ![Footer](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/footer/src/footer.min.js?compression=gzip&label=Footer)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/footer/style/style.css?compression=gzip&label=style&color=green) （表尾）
  * ![Filter](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/filter/src/filter.min.js?compression=gzip&label=Filter)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/filter/style/style.css?compression=gzip&label=style&color=green) （筛选）
  * ![Loading](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/loading/src/loading.min.js?compression=gzip&label=Loading)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/loading/style/style.css?compression=gzip&label=style&color=green) （加载中）
  * ![Tooltip](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/tooltip/src/tooltip.min.js?compression=gzip&label=Tooltip)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/tooltip/style/style.css?compression=gzip&label=style&color=green) （提示信息）
  * ![Menu](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/menu/src/menu.min.js?compression=gzip&label=Menu)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/menu/style/style.css?compression=gzip&label=style&color=green) （快捷菜单）
  * ![Export](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/export/src/mixin.min.js?compression=gzip&label=Export)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/export/style/style.css?compression=gzip&label=style&color=green) （导出）
  * ![Resize](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/resize/src/resize.min.js?compression=gzip&label=Resize) （响应式）
* Component （增强组件）
  * ![Grid](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/grid/src/grid.min.js?compression=gzip&label=Grid)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/grid/style/style.css?compression=gzip&label=style&color=green) （高级表格）
  * ![Column](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/column/src/column.min.js?compression=gzip&label=Column) （静态列）
  * ![Form](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/form/src/form.min.js?compression=gzip&label=Form)![FormItem](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/form/src/form-item.min.js?compression=gzip&label=FormItem)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/form/style/style.css?compression=gzip&label=style&color=green) （表单）
  * ![Pager](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/pager/src/pager.min.js?compression=gzip&label=Pager)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/pager/style/style.css?compression=gzip&label=style&color=green) （分页 ）
  * ![Toolbar](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/toolbar/src/toolbar.min.js?compression=gzip&label=Toolbar)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/toolbar/style/style.css?compression=gzip&label=style&color=green) （工具栏）
  * ![Checkbox](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/checkbox/src/checkbox.min.js?compression=gzip&label=Checkbox)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/checkbox/style/style.css?compression=gzip&label=style&color=green) （复选框）
  * ![Radio](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/radio/src/radio.min.js?compression=gzip&label=Radio) ![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/radio/style/style.css?compression=gzip&label=style&color=green)（单选框）
  * ![Input](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/input/src/input.min.js?compression=gzip&label=Input)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/input/style/style.css?compression=gzip&label=style&color=green) （输入框）
  * ![Modal](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/modal/src/modal.min.js?compression=gzip&label=Modal)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/modal/style/style.css?compression=gzip&label=style&color=green) （模态窗口）
  * ![Button](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/button/src/button.min.js?compression=gzip&label=Button)![style](http://img.badgesize.io/https://unpkg.com/vxe-table/lib/button/style/style.css?compression=gzip&label=style&color=green) （按钮）
* Plugins（插件）
  * 增强插件
    * [![vxe-table-plugin-export-xlsx](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-export-xlsx/dist/index.min.js?compression=gzip&label=vxe%20table%20plugin%20export%20xlsx)](https://www.npmjs.org/package/vxe-table-plugin-export-xlsx)
    * [![vxe-table-plugin-menus](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-menus/dist/index.min.js?compression=gzip&label=vxe%20table%20plugin%20menus)](https://www.npmjs.org/package/vxe-table-plugin-menus)
    * [![vxe-table-plugin-charts](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-charts/dist/index.min.js?compression=gzip&label=vxe%20table%20plugin%20excel)](https://www.npmjs.org/package/vxe-table-plugin-charts)![style](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-charts/dist/style.min.css?compression=gzip&label=style&color=green) ([图表插件](https://www.npmjs.com/package/vxe-table-plugin-charts))
    * [![vxe-table-plugin-shortcut%20key](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-shortcut-key/dist/index.min.js?compression=gzip&label=vxe%20table%20plugin%20shortcut-key)](https://www.npmjs.org/package/vxe-table-plugin-shortcut-key)
  * 适配插件
    * [![vxe-table-plugin-element](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-element/dist/index.min.js?compression=gzip&label=vxe%20table%20plugin%20element)](https://www.npmjs.org/package/vxe-table-plugin-element)![style](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-element/dist/style.min.css?compression=gzip&label=style&color=green) ([element-ui 适配插件](https://www.npmjs.org/package/vxe-table-plugin-element))
    * [![vxe-table-plugin-iview](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-iview/dist/index.min.js?compression=gzip&label=vxe%20table%20plugin%20iview)](https://www.npmjs.org/package/vxe-table-plugin-iview)![style](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-iview/dist/style.min.css?compression=gzip&label=style&color=green) ([iview 适配插件](https://www.npmjs.org/package/vxe-table-plugin-iview))
    * [![vxe-table-plugin-antd](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-antd/dist/index.min.js?compression=gzip&label=vxe%20table%20plugin%20antd)](https://www.npmjs.org/package/vxe-table-plugin-antd)![style](http://img.badgesize.io/https://unpkg.com/vxe-table-plugin-antd/dist/style.min.css?compression=gzip&label=style&color=green) ([ant-design-vue 适配插件](https://www.npmjs.org/package/vxe-table-plugin-antd))

## Docs

[To view the user guide 使用指南](https://github.com/xuliangzhan/vxe-table-demo)

[To view the example](https://xuliangzhan.github.io/vxe-table/#/table/base/basic) [查看演示](https://xuliangzhan_admin.gitee.io/vxe-table/#/table/base/basic)  
[To view the document](https://xuliangzhan.github.io/vxe-table/#/table/api) [查看文档](https://xuliangzhan_admin.gitee.io/vxe-table/#/table/api)  

## Installing

依赖库：[vue](https://www.npmjs.com/package/vue) 2.6+, [xe-utils](https://www.npmjs.com/package/xe-utils) 2.2+

```shell
npm install xe-utils vxe-table
```

Get on [unpkg](https://unpkg.com/vxe-table/) and [cdnjs](https://cdn.jsdelivr.net/npm/vxe-table/)

```HTML
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vxe-table/lib/index.css">
<!-- 引入脚本 -->
<script src="https://unpkg.com/xe-utils"></script>
<script src="https://unpkg.com/vxe-table"></script>
```

```javascript
import Vue from 'vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)
```

## Example

```html
<template>
  <div>
    <vxe-table :data="tableData">
      <vxe-table-column type="seq" title="Sequence number" width="80"></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex"></vxe-table-column>
      <vxe-table-column field="address" title="Address"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { id: 10001,  name: 'Test1', role: 'Develop', sex: 'Man', address: 'Shenzhen' },
        { id: 10002,  name: 'Test2', role: 'Test', sex: 'Man', address: 'Guangzhou' },
        { id: 10003,  name: 'Test3', role: 'PM', sex: 'Man', address: 'Shanghai' }
      ]
    }
  }
}
</script>
```

## Donation

If the open source project is very helpful to you, you can buy the author a cup of coffee.  
如果这个开源项目对您有帮助，请作者喝杯咖啡吧。☕

![pay](https://github.com/xuliangzhan/vxe-table/blob/master/public/static/donation/pay.jpg?raw=true)

## License

MIT License, 2019-present, Xu Liangzhan
