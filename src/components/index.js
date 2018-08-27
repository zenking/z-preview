import Vue from "vue";
import ZenPreview from "./preview.vue"

const Components = {
  ZenPreview
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;