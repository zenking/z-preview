import Vue from "vue";
import ZPreview from "./preview.vue"

const Components = {
    ZPreview
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;