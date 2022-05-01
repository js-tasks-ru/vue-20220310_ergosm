import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

const component = defineComponent({
  data() {
    return {
      operand1: 0,
      operand2: 0,
      functionType: 'sum',
      fnc(a, b) {
        switch (this.functionType){
          case 'sum': return a + b;
          case 'subtract': return a - b;
          case 'multiply': return a * b;
          case 'divide': return a / b;
        }
      }
    };
  },
  computed: {
    operationResult() {
      return this.fnc(this.operand1, this.operand2);
    }
  },
  template: `
    <div class="row">
        <div class="col">
          <input type="number" v-model="this.operand1" />
        </div>

        <div class="col" style="display: flex; flex-direction: column; font-family: emoji">
          <label><input type="radio" name="operator" value="sum" v-model=functionType /> ➕</label>
          <label><input type="radio" name="operator" value="subtract" v-model=functionType /> ➖</label>
          <label><input type="radio" name="operator" value="multiply" v-model=functionType /> ✖</label>
          <label><input type="radio" name="operator" value="divide" v-model=functionType /> ➗</label>
        </div>

        <div class="col">
          <input type="number" v-model="this.operand2"/>
        </div>

        <div class="col">=</div>

        <output class="col" :value="operationResult"></output>
      </div>
  `
});

const app = createApp(component);
app.mount("#app");
