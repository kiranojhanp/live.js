import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import KnobControl from 'vue-knob-control';
import VTooltip from 'v-tooltip'
import VueAnalytics from 'vue-analytics'

Vue.use(VTooltip)
Vue.config.productionTip = false;

Vue.use(KnobControl)

Vue.component('knob-control', KnobControl)


Vue.use(VueAnalytics, {
  id: `${process.env.TRACKING_ID}`,
  checkDuplicatedScript: true
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
