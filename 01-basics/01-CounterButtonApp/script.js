import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

const component = defineComponent({
  name: 'rootComponent',
  data() {
    return {
      counter: 0
    };
  },
  template: `<button @click="() => counter++" type="button">{{ counter }}</button>`
});

const app = createApp(component);
app.mount("#app");
