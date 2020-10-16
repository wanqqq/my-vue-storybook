import { configure } from '@storybook/vue'
// 加载所有的组件故事
configure(require.context('./stories', true, /\.js$/), module)
