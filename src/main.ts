import { createApp } from 'vue'
import vue3SeamlessScroll from "vue3-seamless-scroll";
import router from "./router";
import "./styles/index.less";
import App from './App.vue'

const app = createApp(App);

app.use(router);
app.use(vue3SeamlessScroll);

app.mount("#app");
