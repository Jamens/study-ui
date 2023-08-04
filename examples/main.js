import Vue from "vue";
import App from "./App.vue";
import "../components/css/demo.scss";
import demo from "../components/lib/demo/index";
Vue.use(demo);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
