import Vue from 'vue'
import i18n from '@/i18n'

import {
  VXETable,
  Table,
  Column,
  Header,
  Footer,
  Filter,
  Loading,
  Grid,
  Excel,
  Menu,
  Toolbar,
  Pager,
  Checkbox,
  Radio,
  Input,
  Textarea,
  Button,
  Modal,
  Tooltip,
  Form,
  Select,
  Switch,
  List,

  Export,
  Resize
} from '../../../packages/vxe-table'

// import VXETablePluginElement from '../../../../vxe-table-plugin-element/index.js'
// import VXETablePluginIView from '../../../../vxe-table-plugin-iview/index.js'
// import VXETablePluginAntd from '../../../../vxe-table-plugin-antd/index.js'
// import VXETablePluginMenus from '../../../../vxe-table-plugin-menus/index.js'
import VXETablePluginElement from 'vxe-table-plugin-element'
import VXETablePluginIView from 'vxe-table-plugin-iview'
import VXETablePluginAntd from 'vxe-table-plugin-antd'
import VXETablePluginMenus from 'vxe-table-plugin-menus'
import VXETablePluginVirtualTree from 'vxe-table-plugin-virtual-tree'
import VXETablePluginExportXLSX from 'vxe-table-plugin-export-xlsx'
import VXETablePluginExportPDF from 'vxe-table-plugin-export-pdf'
import 'vxe-table-plugin-element/dist/style.css'
import 'vxe-table-plugin-iview/dist/style.css'
import 'vxe-table-plugin-antd/dist/style.css'
import 'vxe-table-plugin-virtual-tree/dist/style.css'

VXETable.setup({
  table: {
    exportConfig: {
      types: ['csv', 'html', 'xml', 'txt']
    }
  },
  translate: key => key && key.indexOf('app.') > -1 ? i18n.t(key) : key, // 自动翻译以 app. 开头的键值
  i18n: key => i18n.t(key)
})

Vue.use(Column)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Filter)
Vue.use(Loading)
Vue.use(Grid)
Vue.use(Excel)
Vue.use(Menu)
Vue.use(Toolbar)
Vue.use(Pager)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(Input)
Vue.use(Textarea)
Vue.use(Button)
Vue.use(Modal)
Vue.use(Tooltip)
Vue.use(Form)
Vue.use(Select)
Vue.use(Switch)
Vue.use(List)

Vue.use(Export)
Vue.use(Resize)
Vue.use(Table)

// 给 vue 实例挂载全局窗口对象
Vue.prototype.$XModal = VXETable.modal

VXETable.use(VXETablePluginElement)
VXETable.use(VXETablePluginIView)
VXETable.use(VXETablePluginAntd)
VXETable.use(VXETablePluginMenus)
VXETable.use(VXETablePluginVirtualTree)
VXETable.use(VXETablePluginExportXLSX)
VXETable.use(VXETablePluginExportPDF)
