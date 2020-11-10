import Vue from "vue";
//对最上级vue添加模板
import App from "./App";
//对最上级vue添加路由
import router from "./router";
import 'ant-design-vue/dist/antd.css'; 
import '@/global-config/global-css/demo-css.less'
import '@/assets/aliIcon/Demo/iconfont.css'
// import '@/assets/aliIcon/Demo/iconfont.js'
//需要手动将ant-vue的组件加载进来，不然无法使用
import {
  LocaleProvider,
  Layout,
  Input,
  InputNumber,
  Button,
  Switch,
  Radio,
  Checkbox,
  Select,
  Card,
  Form,
  Row,
  Col,
  Modal,
  Table,
  Tabs,
  Icon,
  Badge,
  Popover,
  Dropdown,
  List,
  Avatar,
  Breadcrumb,
  //   Steps,
  Spin,
  Menu,
  Drawer,
  Tooltip,
  //   Alert,
  Tag,
  //   Divider,
  DatePicker,
  TimePicker,
  Upload,
  //   Progress,
  //   Skeleton,
  //   PageHeader,
  Result,
  //   Statistic,
  Descriptions,
  message,
  notification,
  FormModel,
  Collapse,
  Popconfirm,
  Affix,
  ConfigProvider,
  AutoComplete,
  Cascader
} from "ant-design-vue";
//使用插件
Vue.use(Breadcrumb);
Vue.use(Affix);
Vue.use(Popconfirm);
Vue.use(Collapse);
Vue.use(FormModel);
Vue.use(LocaleProvider);
Vue.use(Layout);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Button);
Vue.use(Switch);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Card);
Vue.use(Form);
Vue.use(Row);
Vue.use(Col);
Vue.use(Modal);
Vue.use(Table);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Badge);
Vue.use(Popover);
Vue.use(Dropdown);
Vue.use(List);
Vue.use(Avatar);
// Vue.use(Breadcrumb);
// Vue.use(Steps);
Vue.use(Spin);
Vue.use(Menu);
Vue.use(Drawer);
Vue.use(Tooltip);
// Vue.use(Alert);
Vue.use(Tag);
// Vue.use(Divider);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Upload);
// Vue.use(Progress);
// Vue.use(Skeleton);
// Vue.use(PageHeader);
Vue.use(Result);
// Vue.use(Statistic);
Vue.use(Descriptions);
Vue.use(AutoComplete);
Vue.use(Cascader);
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
