import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const component = defineComponent({
  data() {
    return {
      header: '',
      selected: 1,
      value: 1
    };
  },

  watch: {
    async value(newValue, oldValue) {
      this.header = (await fetchMeetupById(newValue))['title'];
    }
  },

  template: `
    <div>
        <label v-for="n in 5"><input type="radio" name="meetupId" :value=n v-model=value />{{ n }}</label>

        <hr />

        <h3>{{ header }}</h3>
      </div>
  `
});

const app = createApp(component);
app.mount("#app");
