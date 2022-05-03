import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';

import MeetupCover from "../03-MeetupCover/MeetupCover";
import MeetupDescription from "../02-MeetupDescription/MeetupDescription";
import MeetupInfo from "../04-MeetupInfo/MeetupInfo";
import MeetupAgenda from "../05-MeetupAgenda/MeetupAgenda";
import MeetupAgendaItem from "../05-MeetupAgenda/MeetupAgendaItem";
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupAgenda,
    MeetupAgendaItem,
    MeetupView
  },

  data() {
    return {
      meetup: null,

      loadError: null
    }
  },

  props: {
    meetupId: {
      type: Number,
      required: true
    }
  },

  methods: {
    async getMeetup() {
      try{
        this.loadError = null;
        this.meetup = null;
        this.meetup = await fetchMeetupById(this.meetupId);
      }
      catch(err){
        this.loadError = err;
      }
    }
  },

  watch: {
    async meetupId(newValue, oldValue) {
      return await this.getMeetup();
    }
  },

  mounted() {
    this.getMeetup();
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="meetup !== null" :meetup="meetup" />

      <ui-container v-else-if="!loadError">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if="loadError !== null">
        <ui-alert>{{ loadError.message }}</ui-alert>
      </ui-container>
    </div>
    `,
});
