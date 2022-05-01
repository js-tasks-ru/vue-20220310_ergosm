import { defineComponent, createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const component = defineComponent({
  name: 'rootComponent',

  data(){
    return{
      searchedString: '',
      emails,
    };
  },

  computed: {
    searchedEmails(){
      let handledEmails = [];

      emails.forEach(value => {
        handledEmails.push({ Name: value, Class: this.searchedString !== '' && value.includes(this.searchedString) ? "marked" : "" });
      });

      return handledEmails;
    }
  },

  template: `
    <div class="container">
        <div class="form-group">
          <input type="search" v-model="searchedString" />
        </div>
        <ul>
          <li v-for="email in searchedEmails" :class="email.Class">{{ email.Name }}</li>
        </ul>
      </div>
  `
});

const app = createApp(component);
app.mount("#app");
