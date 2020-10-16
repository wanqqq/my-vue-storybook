import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import MyProgress from '../components/el-progress.vue';

Vue.use(ElementUI);

export default {
  title: 'Example/elProgress',
  component: MyProgress,
};

export const Progress = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyProgress },
  template: '<my-progress :percentage="percentage"></my-progress>',
});
